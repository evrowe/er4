var passport = require('passport');
var GitHubStrategy = require('passport-github2').Strategy;

// Passport supports persistent login sessions via serializing and deserializing
// users to and from the application session. In a "real" app this would be done
// with a user ID of some sort, but since this is a single-purpose personal site
// with only one user (me), we will just serialize the entire GitHub user object
// for simplicity.
passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

module.exports = function(app) {

  // User the GitHub strategy for Passport.
  // Passport strategies require a `verify` function, which accepts credentials
  // in some form (in this case, an `accessToken`, `refreshToken` and GitHub profile
  // object, all sent by GitHub), and then invoke a callback with the user object.
  passport.use(new GitHubStrategy({
      clientID: app.get('GITHUB_CLIENT_ID'),
      clientSecret: app.get('GITHUB_CLIENT_SECRET'),
      callbackURL: 'https://evan-rowe.com/service/auth'
    },
    function(accessToken, refreshToken, profile, done) {
      // Async verification, because reasons
      process.nextTick(function () {

        // Me only, kids. All y'all haters can stay out.
        if (profile.username === 'evrowe') {
          return done(null, profile);
        }

        // Otherwise return an error
        return done(new Error);
      });
    }
  ));

  // Attach Passport to routes related to authentication
  app.get('/service/auth/login',
    passport.authenticate('github', { scope: ['user:email'] }),
    function(req, res) {
      // GitHub actually takes care of things from here so this no-op never
      // gets called.
    }
  );

  app.get('/service/auth/authComplete',
    passport.authenticate('github', { failureRedirect: '/you-didnt-say-the-magic-word' }),
    function(req, res) {

      // Set up a session token
      var token = Math.random().toString(36).substring(4);

      req.session.authenticated = true;
      req.session.token = token;

      // Redirect to the system dashboard
      res.redirect('/dashboard');
    }
  );

  app.use(passport.initialize()); // Setup Passport for authentication
  app.use(passport.session()); // Create the passport session
};
