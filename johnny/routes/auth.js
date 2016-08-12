const env = process.env.NODE_ENV;

// Simple check for authentication status; R U EVEN LOGGED IN?
module.exports.doAuthCheck = function(req, res, next) {
  var authenticated = req.session.authenticated;

  // Hacky authentication workaround until I can get the github auth callback to
  // work across multiple environments
  if (env === 'development') {
    authenticated = true;
  }

  res.status(200).send({
    authenticated: authenticated
  });
};

// Handler successful github login
module.exports.authComplete = function(req, res, next) {
  var authenticated = req.session.authenticated;
  var token = req.session.token;

  if (authenticated && token) {
    res.status(200).send({
      authenticated: true,
      token: token
    });
  } else {
    res.status(200).send({
      authenticated: false
    });
  }
};

// Performs the login operation, as this is the one actually watched by the
// login strategy
module.exports.doLogin = function(req, res, next) {
  var authenticated = req.session.authenticated;

  // Hacky authentication workaround until I can get the github auth callback to
  // work across multiple environments
  if (env === 'development') {
    authenticated = true;
  }

  res.status(200).send({
    authenticated: authenticated
  });
};

// Handle logging the user out of the app
module.exports.doLogOut = function(req, res, next) {
  // @TODO: Destroy the local session o_O
  req.session.authenticated = undefined;
  req.session.token = undefined;

  res.status(200).send({
    authenticated: false,
    token: null
  });
};
