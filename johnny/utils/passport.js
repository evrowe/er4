var util = require('util');
var passport = require('passport');
var Strategy = require('passport-strategy').Strategy;
var GitHubStrategy = require('passport-github2').Strategy;

// Create Dev Environment Strategy
//----------------------------------------------------------------------------

function DevServerStrategy(name) {
  Strategy.call(this);
  this.name = name; // name of the strategy
}

// Grant DevServerStrategy full-fledged Passport Strategy powers
util.inherits(DevServerStrategy, Strategy);

// Authentication for local development server; bypasses github login and just
// lets you in. We need this because it isn't possible to redirect back to
// `localhost` from GitHub, and it's not realistic to force configuring aliased
// hosts on every environment that needs to run this, especially if somebody is
// cloning this for tinkering purposes.
DevServerStrategy.prototype.authenticate = function(req, res) {
  req.session.authenticated = true;
  req.session.token = Math.random().toString(36).substring(7);
  // Send this dev along their way.
  this.redirect('/dashboard');
};

// Give the dev server strategy the same name as the github strategy so that it
// can "behave" the same way as prod
var devServerStrategy = new DevServerStrategy('github');

// Setup Github Strategy for Prod
//----------------------------------------------------------------------------

// Use the GitHub strategy for Passport.
// Passport strategies require a `verify` function, which accepts credentials
// in some form (in this case, an `accessToken`, `refreshToken` and GitHub profile
// object, all sent by GitHub), and then invoke a callback with the user object.
var gitHubStrategy = new GitHubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: 'https://evan-rowe.com/service/auth/authComplete'
  },
  function(accessToken, refreshToken, profile, done) {
    // Async verification, because reasons
    process.nextTick(function() {

      // Me only, kids. All y'all haters can stay out.
      if (profile.username === 'evrowe') {
        return done(null, profile);
      }

      // Otherwise return an error
      return done(new Error);
    });
  }
);

// Setup Passport Session
//----------------------------------------------------------------------------

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

// Mount the correct passport auth strategy for the given environment
if (process.env.NODE_ENV === 'production') {
  passport.use(gitHubStrategy);
} else {
  passport.use(devServerStrategy);
}

module.exports.passport = passport;

module.exports.handlePassportSuccess = function(req, res) {
  req.session.authenticated = true;
  req.session.token = Math.random().toString(36).substring(7);

  // Redirect to the system dashboard
  res.redirect('/dashboard');
};
