// Node modules
var http = require('http');
var path = require('path');
var express = require('express');
var compression = require('compression');
var morgan = require('morgan');
var passport = require('passport');
var session = require('express-session');

// Environment Setup
// -----------------------------------------------------------------------------

// Load environment variables into process.env from .env file
require('dotenv').config();

// Application Modules
var mountAppRoutes = require('./johnny/routes');

// Application Variables
var cacheTime = 7 * 24 * 60 * 60 * 1000;
var host      = process.env.HOST || '127.0.0.1';
var port      = process.env.PORT || 3000;
var env       = process.env.NODE_ENV;
var secret    = process.env.COOKIE_SECRET;
var GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID;
var GITHUB_CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;

// Setup Express App
//------------------------------------------------------------------------------

var app = express();
app.set('host', host);
app.set('port', port);
app.set('env', env);
app.set('GITHUB_CLIENT_ID', GITHUB_CLIENT_ID);
app.set('GITHUB_CLIENT_SECRET', GITHUB_CLIENT_SECRET);

// Session Configuration
//------------------------------------------------------------------------------

var sessionConfig = {
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
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'dist'), { maxAge: cacheTime })); // Serve static assets from /dist

// Set up modules
// -----------------------------------------------------------------------------

// Mount server routes
mountAppRoutes(app);

// Start the flippin server
// -----------------------------------------------------------------------------

http.createServer(app).listen(app.get('port'), app.get('host'), function(){
  console.log(`Listening on port ${app.get('port')}`);
  if (app.get('env') === 'development') {
    console.log('"If everybody could just love each other the world would be a better place"\n -Johnny, "The Room"');
  }
});
