const path = require('path');
const webpack = require('webpack');
const Dashboard = require('webpack-dashboard');
const DashboardPlugin = require('webpack-dashboard/plugin');
const cssnext = require('postcss-cssnext');
const csswring = require('csswring');
const precss = require('precss');
const colorFunction = require('postcss-color-function');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const NpmInstallPlugin = require('npm-install-webpack-plugin');

// Setup dev vs prod environments.
var cssLoader, devtool, entry;
const env = process.env.NODE_ENV || 'development';

var plugins = [
  new webpack.EnvironmentPlugin([
    'NODE_ENV',
    'HOSTNAME'
  ]),
  // middlewarez
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin(),
  // convert inline style rules into a proper stylesheet
  new ExtractTextPlugin('styles.css'),
  // useful? maybe. who cares.
  new NpmInstallPlugin({
    save: true
  })
];

// dev
if (env === 'development') {
  // include source maps for dev
  devtool = 'source-map';
  // inline styles for dev
  cssLoader = {
    test: /\.css$/,
    loader: 'style?sourceMap!css?modules&importLoaders=1&localIdentName=[path]__[name]__[local]__[hash:base64:5]!postcss'
  };
  entry = [
    'webpack-dev-server/client?http://localhost:4200', // webpack-dev-server
    'webpack/hot/only-dev-server', // webpack-dev-server
    './app/main' // app entry point
  ];

  // Add the dashboard plugin for dev server
  var dashboard = new Dashboard();
  plugins.push(new DashboardPlugin(dashboard.setData));

// prod
} else {
  // fully generated stylesheet for prod
  cssLoader = {
    test: /\.css$/,
    loader: ExtractTextPlugin.extract(
      'style',
      'css?modules&importLoaders=1&localIdentName=[local]_[hash:base64:5]!postcss'
    )
  };
  // no middleware necessary, just GO
  entry = [ './app/main' ];
}

/*
 * Configure dat webpack do
 */
module.exports = {
  devtool: devtool,
  entry: entry,
  // webpack bundle options
  output: {
    path: path.join(__dirname, 'dist', 'build'),
    publicPath: '/build/',
    filename: 'app.js'
  },

  // so many webpack plugins
  plugins: plugins,

  // postcss config. nested style rules, autoprefixing, minify w/ source maps
  postcss: function() {
    return [precss, colorFunction, cssnext, csswring];
  },

  module: {
    loaders: [
      cssLoader,
      {
        test: /\.js$/,
        exclude: [/(node_modules)/,/(johnny)/,/(index\.js)/],
        loaders: ['react-hot', 'babel-loader?presets[]=react,presets[]=es2015,presets[]=stage-0'],
        include: path.join(__dirname, 'app')
      }
    ]
  }
};
