var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: path.resolve(__dirname, 'index.js'),
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel'
      }
    ]
  },
  output: {filename: './public/bundle.js'},
  plugins: [
    new webpack.ProvidePlugin({
      'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
    })
  ]
}
