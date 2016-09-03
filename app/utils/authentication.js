import $ from 'jquery';

// Create no-op class
var Authentication = function() {};

Authentication.prototype.get = function(prop) {
  return this[prop];
};

Authentication.prototype.set = function(prop, value) {
  this[prop] = value;
  return this;
};

// @TODO: Set up a method for storing the token in a cookie as well as local memory
// so that the session state persists across reloads/redirects.

Authentication.prototype.check = function() {
  return $.get('/service/auth/check').then(res => {
    this.set('authenticated', res.authenticated);
    this.set('token', res.token);
    return res.authenticated;
  });
};

Authentication.prototype.doLogout = function () {
  return $.get('/service/auth/logout').then(res => {
    this.set('authenticated', false);
    this.set('token', null);
    return res;
  });
};

module.exports = new Authentication();
