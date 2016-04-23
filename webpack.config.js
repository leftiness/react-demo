var path = require('path');

var babel_loader = {
  test: /.jsx?$/,
  loader: 'babel-loader',
  exclude: /node_modules/,
  query: {
    presets: [ 'es2015', 'react', 'stage-1' ]
  }
};

module.exports = {
  entry: "./main.js",
  module: {
    loaders: [ babel_loader ]
  },
  resolve: {
    root: path.resolve(__dirname),
    extensions: [ '', '.js', '.jsx' ]
  }
};
