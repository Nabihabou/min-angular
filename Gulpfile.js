// Gulpfile.js

var gulp = require('gulp');
var gulpLiveServer = require('gulp-live-server');
var opn = require('opn');

var webpack = require('webpack-stream');
var WebpackDevServer = require('webpack-dev-server');
var webpackConfig = require('./webpack.config.js');

gulp.task('default', ['html', 'webpack']);

gulp.task('html', function(){
	return gulp.src('src/index.html')
		.pipe(gulp.dest('build'));
});

gulp.task('webpack', function() {
  return gulp.src('src/main.js')
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest('build/'));
});

gulp.task('ser', function() {
	return gulpLiveServer
		.static('build', 8888)
		.start();
});

gulp.task('open', ['serve'], function () {
  return opn('http://localhost:8888');
});

gulp.task("serve", function(callback) {
    // Start a webpack-dev-server
    var compiler = webpack({
        // configuration
        webpackConfig
    });

    new WebpackDevServer(compiler, {
        // server and middleware options
    }).listen(6666, "localhost", function(err) {});
});
