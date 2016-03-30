// Node modules
var path = require('path');

module.exports = function(app) {

  // app.get('/', function(req, res){
  //   res.send('o hi mark');
  // });

  // Serve up the index html from the dist folder and let the Ember app
  // handle all of the front-end routes
  app.get('*', function(req, res) {
    res.sendFile(path.resolve(__dirname, '..', 'dist', 'index.html'));
  });
}
