// Handler successful github login
module.exports.doAuthCheck = function(req, res, next) {
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

module.exports.validateAPIRequest = function(req, res, next) {
  // Confirm session authentication status and make sure tokens match
  if (!req.session.authenticated || req.query.token !== req.session.token) {
    return res.status(403).send({
      success: false,
      message: 'Unauthorized access attempt'
    });
  } else {
    return next();
  }
};
