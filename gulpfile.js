'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');

gulp.task('docs', function(callback) {
  var port = 9100;
  var config = require('./webpack.dev.js')(port);

  new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,

    // stats: {
    //   cached: false,
    //   cachedAssets: false,
    //   colors: true,
    //   exclude: ['node_modules', 'components'],
    // },
    stats: false,
  }).listen(port, 'localhost', function(err) {
    if (err) throw new gutil.PluginError('docs-error', err);
    gutil.log('docs', 'http://localhost:' + port + '/docs/');
  });
});
