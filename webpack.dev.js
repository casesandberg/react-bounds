'use strict';

var path = require('path');
var webpack = require('webpack');

module.exports = function(port) {
  return {
    entry: ['webpack-dev-server/client?http://localhost:' + port, 'webpack/hot/dev-server', './docs/index.js'],
    output: {
      path: path.join(__dirname, 'docs/build'),
      filename: 'bundle.js',
      publicPath: 'http://localhost:' + port + '/docs/build/',
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          include: /react-context/,
          loaders: ['react-hot-loader', 'babel-loader'],
        },
        {
          test: /\.js$/,
          exclude: [/node_modules/, /modules/],
          loaders: ['react-hot-loader', 'babel-loader'],
        }, {
          test: /\.jsx$/,
          exclude: [/node_modules/, /modules/],
          loaders: ['jsx-loader', 'babel-loader', 'react-map-styles'],
        }, {
          test: /\.css$/,
          loaders: ['style-loader', 'css-loader'],
        }, {
          test: /\.md$/,
          loaders: ['html-loader'],
        },
      ],
    },
    resolve: {
      alias: {
        'react-color': path.resolve(__dirname, './src/index.js'),
        'react': path.resolve(__dirname, './node_modules/react'),
      },
      extensions: ['', '.js', '.jsx'],
      fallback: [path.resolve(__dirname, './modules')],
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin({quiet: true}),
      new webpack.NoErrorsPlugin(),
    ],
    quiet: true,
    devtool: 'eval',
    debug: true,
  };
};
