var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./../webpack.config');

new WebpackDevServer(webpack(config), {

  contentBase: './dist',

  hot: true,

  historyApiFallback: false,

  proxy: {
    '*': 'http://localhost:3000'
  },

  publicPath: config.output.publicPath

}).listen(4200, '127.0.0.1', function(err, result){
  if (err) {
    console.log(err);
    return;
  }

  console.log('Webpack dev server listening at localhost:4200');
});
