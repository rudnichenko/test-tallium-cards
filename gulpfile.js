const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const watch = require('gulp-watch');

gulp.task('prefix', () =>
	gulp.src('src/main-style.css')
	.pipe(autoprefixer({
		browsers: ['last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'],
		cascade: false
	}))
	.pipe(gulp.dest('./'))
	);

gulp.task('watch', function(){
	gulp.watch('src/main-style.css', ['prefix']);
});

gulp.task('default', ['watch']);