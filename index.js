// Node modules
var express = require('express');
var http = require('http');
var path = require('path');

// Create the app
var app = express();

// Bring in them routes
var serverRoutes = require('./johnny/routes');

// App wide vars
var cacheTime = 7 * 24 * 60 * 60 * 1000;

// Static assets
app.use(express.static(path.join(__dirname, 'dist')));

// Mount all them routes
serverRoutes(app);

// Start app
http.createServer(app).listen(3000, function() {
  console.info('Server is running at localhost:3000');
  console.log('"If everybody could just love each other the world would be a better place"\n -Johnny, "The Room"');
});
