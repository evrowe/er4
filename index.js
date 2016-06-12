// Node modules
var path = require('path');
var express = require('express');
var compression = require('compression');
var morgan = require('morgan');
var webpack = require('webpack');
var config = require('./webpack.config');

// Application Variables
var cacheTime = 7 * 24 * 60 * 60 * 1000;
var port      = process.env.PORT || 3000;
var env       = process.env.NODE_ENV;

// Create the app
var app = express();
var compiler = webpack(config);

// Set app variables
app.set('port', port);
app.set('env', env);

app.use(morgan('dev')); // Console Request Logging
app.use(compression()); // Compression

// Bring in them routes
// var serverRoutes = require('./johnny/routes');

// Mount all them routes
// serverRoutes(app);

// Enable webpack dev and hot middleware during development
if (process.env.NODE_ENV === 'development') {
  // dev-middleware handles serving application assets with a connect server instead of serving bundled
  // assets.
  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: false, // display no info to console (only warnings and errors)
    publicPath: config.output.publicPath, // public path to bind the middleware to
    stats: {
      colors: true
    }
  }));

  app.use(require('webpack-hot-middleware')(compiler));
}

// Serve static assets from /dist
app.use(express.static(path.join(__dirname, 'dist'), { maxAge: cacheTime }));

// Send index.html for all other requests
// @TODO: move to a separate file
app.get('*', function(req, res) {
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Evan Rowe is a Big Hunk</title>

        <!-- Stylesheets -->
        ${process.env.NODE_ENV === 'production' ? '<link rel="stylesheet" href="milligram.min.css">' : '<link rel="stylesheet" href="milligram.css">'}

        <!-- Build Assets -->
        ${process.env.NODE_ENV === 'production' ? '<link rel="stylesheet" href="/build/styles.css">' : ''}
      </head>
      <body>
        <div id="app-root"></div>
        <script src="/build/app.js"></script>
      </body>
    </html>
  `);
});

// Start app
app.listen(app.get('port'), function(err) {
  if (err) {
    return console.log(err);
  }

  console.log(`Listening on port ${app.get('port')}`);
  console.log('"If everybody could just love each other the world would be a better place"\n -Johnny, "The Room"');
});
