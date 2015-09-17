'use strict';

var path = require('path');
var webpack = require('webpack');

module.exports = function(port) {
  return {
    entry: ['./docs/index.js'],
    output: {
      path: path.join(__dirname, 'build'),
      filename: 'bundle.js',
      publicPath: '/build/',
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          include: /react-context/,
          loaders: ['babel-loader'],
        },
        {
          test: /\.js$/,
          exclude: [/node_modules/, /modules/],
          loaders: ['babel-loader'],
        }, {
          test: /\.jsx$/,
          exclude: [/node_modules/],
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
        'react-bounds': path.resolve(__dirname, './src/index.js'),
      },
      extensions: ['', '.js', '.jsx'],
      fallback: [path.resolve(__dirname, './modules')],
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('production'),
        },
      }),
      new webpack.optimize.DedupePlugin(),
    ],
    quiet: true,
  };
};
