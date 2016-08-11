var path = require('path');

// Routes
var entry = require('./routes/entry');
var auth = require('./routes/auth');

module.exports = function(app) {

  // Journal entries
  app.get('/service/entries', entry.getEntries);
  app.get('/service/entries/:entryId', entry.getEntry);

  // Authentication
  app.get('/service/auth/authComplete', auth.authComplete);
  app.get('/service/auth/check', auth.doAuthCheck);
  app.get('/service/auth/logout', auth.doLogOut);

  // Serve up the index html from the dist folder and let the React app
  // handle all of the front-end routes
  app.get('*', function(req, res) {
    res.sendFile(path.resolve(__dirname, '..', 'dist', 'index.html'));
  });
};
