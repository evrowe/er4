import $ from 'jquery';

// Create no-op class
var Authentication = function() {};

Authentication.prototype.doLogin = function() {
  return $.get('/service/auth/check').then(res => {
    this.authenticated = res.authenticated;
    this.token = res.token;
    return res;
  });
};

Authentication.prototype.doLogout = function () {
  return $.get('/service/auth/logout').then(res => {
    this.authenticated = false;
    this.token = null;
    return res;
  });
};

module.exports = new Authentication();
