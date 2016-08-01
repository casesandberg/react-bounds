'use strict'

var gulp = require('gulp')
var gutil = require('gulp-util')
var webpack = require('webpack')
// var WebpackDevServer = require('webpack-dev-server')
// var uglify = require('gulp-uglify')
// var babel = require('gulp-babel')

// gulp.task('docs', function (callback) {
//   var port = 9100
//   var config = require('./webpack.dev.js')(port)

//   new WebpackDevServer(webpack(config), {
//     publicPath: config.output.publicPath,
//     hot: true,
//     stats: false,
//   }).listen(port, 'localhost', function (err) {
//     if (err) throw new gutil.PluginError('docs-error', err)
//     gutil.log('docs', 'http://localhost:' + port + '/docs/')
//   })
// })

// gulp.task('docs-build', function (done) {
//   var config = require('./webpack.prod.js')()
//   webpack(config, function (err, stats) {
//     if (err) throw new Error(err)
//     done()
//   })
// })

gulp.task('default', ['lib'])

gulp.task('lib', function (done) {
  var config = require('./webpack.lib')()
  var compiler = webpack(config)
  compiler.run(function(err, stats) {
    if (err) throw err
    if (stats.hasWarnings() || stats.hasErrors()) {
      console.log(stats.toString())
    }
    done()
  })
})

gulp.task('dev', ['lib'], function() {
  var config = require('./webpack.lib')()
  var compiler = webpack(config)
  compiler.watch({}, function(err, stats) {
    if (err) throw err
    if (stats.hasWarnings() || stats.hasErrors()) {
      console.log(stats.toString())
    }
  })
})
