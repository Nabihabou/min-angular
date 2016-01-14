// Gulpfile.js
var gulp = require('gulp');
var webpack = require('webpack-stream');

gulp.task('default', ['html']);

gulp.task('html', function(){
	return gulp.src('src/index.html')
		.pipe(gulp.dest('build'));
});

gulp.task('webpack', function() {
  return gulp.src('src/main.js')
    .pipe(webpack())
    .pipe(gulp.dest('build/'));
});