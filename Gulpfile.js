// Gulpfile.js
var gulp = require('gulp');

gulp.task('default', ['html']);

gulp.task('html', function(){
	gulp.src('src/index.html')
			.pipe(gulp.dest('build'));
});
