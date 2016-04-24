var path = require('path');

var babel_loader = {
  test: /.jsx?$/,
  loader: 'babel-loader',
  exclude: /node_modules/,
  query: {
    presets: [ 'es2015', 'react', 'stage-1' ]
  }
};

var css_loader = {
  test: /\.css$/,
  loader: 'style-loader!css-loader'
};

module.exports = {
  entry: "mocha!./test/index.js",
  module: {
    loaders: [ babel_loader, css_loader ]
  },
  resolve: {
    root: path.resolve(__dirname),
    extensions: [ '', '.js', '.jsx' ]
  }
};
