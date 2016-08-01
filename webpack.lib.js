var webpack = require('webpack')
var path = require('path')
var nodeExternals = require('webpack-node-externals')

module.exports = function() {
  return {
    context: path.resolve('src'),
    entry: './index',
    output: {
      path: 'lib',
      filename: 'index.js',
      libraryTarget: 'commonjs2'
    },
    externals: [nodeExternals()],
    target: 'node',
    module: {
      loaders: [
        {test: /\.jsx?$/, loader: 'babel'}
      ]
    }
  }
}