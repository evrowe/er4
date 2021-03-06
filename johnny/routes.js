var path = require('path');

// Routes
var auth = require('./routes/auth');
var dashboard = require('./routes/dashboard');
var entry = require('./routes/entry');

// Utils
var passportAuth = require('./utils/passport');

module.exports = function(app) {

  // Public API Routes
  //----------------------------------------------------------------------------

  // Journal entries
  app.get('/service/entries', entry.getEntries);
  app.get('/service/entries/:entryId', entry.getEntry);

  // Passport Auth Routes
  //----------------------------------------------------------------------------

  // Authentication
  app.get('/service/auth/login',
    passportAuth.passport.authenticate('github', { scope: ['user:email'] }),
    function(req, res) {/* GitHub/Passport handles this so there's nothing for us to do */});

  // Post-authentication
  app.get('/service/auth/authComplete',
    passportAuth.passport.authenticate('github', { failureRedirect: '/you-didnt-say-the-magic-word' }),
    passportAuth.handlePassportSuccess);

  // User check auth check/logout routes
  app.get('/service/auth/check', auth.doAuthCheck);
  app.get('/service/auth/logout', auth.doLogOut);

  // Private/Authenticated API Routes
  //----------------------------------------------------------------------------

  app.get('/service/dashboard/entries', auth.validateAPIRequest, dashboard.listEntries);

  // Serve up the index html from the dist folder and let the React app
  // handle all of the front-end routes
  app.get('*', function(req, res) {
    res.sendFile(path.resolve(__dirname, '..', 'dist', 'index.html'));
  });
};
