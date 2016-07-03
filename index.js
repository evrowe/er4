// Node modules
var http = require('http');
var path = require('path');
var express = require('express');
var compression = require('compression');
var morgan = require('morgan');

// Set up Express Server
// -----------------------------------------------------------------------------

// Application Variables
var cacheTime = 7 * 24 * 60 * 60 * 1000;
var host      = process.env.HOST || '127.0.0.1';
var port      = process.env.PORT || 3000;
var env       = process.env.NODE_ENV;

// Create the app
var app = express();

// Set app variables
app.set('host', host);
app.set('port', port);
app.set('env', env);

app.use(morgan('dev')); // Console Request Logging
app.use(compression()); // Compression

// Serve static assets from /dist
app.use(express.static(path.join(__dirname, 'dist'), { maxAge: cacheTime }));

// Set up routes
// -----------------------------------------------------------------------------

// Mount server routes
var mountAppRoutes = require('./johnny/routes');

mountAppRoutes(app);

// Start the flippin server
// -----------------------------------------------------------------------------

http.createServer(app).listen(app.get('port'), app.get('host'), function(){
  console.log(`Listening on port ${app.get('port')}`);
  if (app.get('env') === 'development') {
    console.log('"If everybody could just love each other the world would be a better place"\n -Johnny, "The Room"');
  }
});
