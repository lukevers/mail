var gulp	= require('gulp');
var less	= require('gulp-less');
var concat	= require('gulp-concat');

var _less	= 'assets/less/';
var _css	= 'assets/css/';
var _js		= 'assets/js/';

var less_	= 'assets/css/';
var css_	= 'public/assets/css/';
var js_		= 'public/assets/js/';

gulp.task('less', function(cb) {
	gulp.src([_less+'main.less'])
		.pipe(less())
		.pipe(gulp.dest(less_))
	cb();
});

gulp.task('css', ['less'], function() {
	gulp.src([
		_css+'bootstrap.min.css', 
		_css+'font-awesome.min.css',
		_css+'main.css'])
		.pipe(concat('styles.css'))
		.pipe(gulp.dest(css_));
});

gulp.task('js', function() {
	gulp.src([_js+'jquery.min.js',
		_js+'bootstrap.min.js',
		_js+'main.js'])
		.pipe(concat('scripts.js'))
		.pipe(gulp.dest(js_));
});

gulp.task('default', ['less', 'js', 'css']);

