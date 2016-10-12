// Node modules
const http = require('http');
const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const compression = require('compression');
const morgan = require('morgan');
const passport = require('passport');
const session = require('express-session');
const dotenv = require('dotenv');

// Environment Setup
// -----------------------------------------------------------------------------

// Load environment variables into process.env from .env file
dotenv.config();
dotenv.config({ path: './postgres.env' });

// Application Modules
const db = require('./db');

// Load all of the models here to avoid circular dependencies that arise when
// loading the models in multiple locations. Oof.
// fs.readdirSync(path.join(__dirname, './models')).forEach(file => {
//   require(`./models/${file}`);
// });

// Load entry model
require('./johnny/models/entry');

// Application Routes
const mountAppRoutes = require('./johnny/routes');

// Application Variables
const cacheTime = 7 * 24 * 60 * 60 * 1000;
const host      = process.env.HOST || '127.0.0.1';
const port      = process.env.PORT || 3000;
const env       = process.env.NODE_ENV;
const secret    = process.env.COOKIE_SECRET;
const GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID;
const GITHUB_CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;

// Setup Express App
//------------------------------------------------------------------------------

const app = express();
app.set('host', host);
app.set('port', port);
app.set('env', env);
app.set('GITHUB_CLIENT_ID', GITHUB_CLIENT_ID);
app.set('GITHUB_CLIENT_SECRET', GITHUB_CLIENT_SECRET);

// Session Configuration
//------------------------------------------------------------------------------

const sessionConfig = {
  cookie: {
    httpOnly: true, // this is a security thingus
    maxAge: 2 * 60 * 60 * 1000
  },
  proxy: true, // reverse proxy is ok and can be trusted
  resave: false, // do not save session unless modified
  rolling: true, // reset that cookie expiration time on the reg
  saveUninitialized: false, // save the session erry time
  secret: secret // the secret key for cookie parsing
};

// Production Settings
//------------------------------------------------------------------------------

if (env === 'production') {
  // Trust nginx for secure cookies
  app.set('trust proxy', 1);
  // Restrict cookies to secure only
  sessionConfig.cookie.secure = true;
}

// Setup App Middleware
//------------------------------------------------------------------------------

app.use(morgan('dev')); // Console request logging
app.use(compression()); // Compression
app.use(session(sessionConfig)); // express-session configuration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'dist'), { maxAge: cacheTime })); // Serve static assets from /dist

// Add database methods to the server object
app.db = db;

// Set up modules
// -----------------------------------------------------------------------------

// Mount server routes
mountAppRoutes(app);

// Start the flippin server
// -----------------------------------------------------------------------------

const server = http.createServer(app);

server.listen(app.get('port'), app.get('host'), function(){
  console.log(`Listening on port ${app.get('port')}`);
  if (app.get('env') === 'development') {
    console.log('"If everybody could just love each other the world would be a better place"\n -Johnny, "The Room"');
  }
});
