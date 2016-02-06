 var path = require('path');

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
  output: {filename: './public/bundle.js'}

}
