var gulp = require('gulp'),
		livereload = require('gulp-livereload'),
		connect = require('gulp-connect'),
		concat = require('gulp-concat'),
		copy = require('gulp-copy'),
		uglify = require('gulp-uglifyjs'),
		cssnano = require('gulp-cssnano');

gulp.task('connect', function() {
	connect.server({
		root: 'site1/web',
		livereload: true
	});
});
//copy index
gulp.task('index', function() {
	gulp.src('./site1/src/index.html')
	.pipe(gulp.dest('./site1/web'))
	.pipe(livereload({start: true}));
})
//copy fonts
gulp.task('fonts', function() {
	gulp.src('./site1/src/css/fonts/**/*')
	.pipe(gulp.dest('./site1/web/fonts'));
});
//copy imgs
gulp.task('imgs', function() {
	gulp.src('./site1/src/img/**/*')
	.pipe(gulp.dest('./site1/web/img'));
});
//concat css
gulp.task('css', function() {
	gulp.src('./site1/src/css/*.css')
	.pipe(concat('bundle.css'))
	.pipe(cssnano())
	.pipe(gulp.dest('./site1/web/'))
	.pipe(livereload({start: true}));
});
//concat js
gulp.task('js', function() {
	gulp.src('./site1/src/js/*.js')
	.pipe(concat('bundle.js'))
	.pipe(uglify())
	.pipe(gulp.dest('./site1/web/'))
	.pipe(livereload({start: true}));
});
//copy project to git folder
gulp.task('git', function() {
	gulp.src('./site1/**/*').
	pipe(gulp.dest('../GitHub/site1/'));
});
//watch
gulp.task('watch', function() {
	gulp.watch('./site1/src/css/*.css', ['css']);
	gulp.watch('./site1/src/index.html', ['index']);
	gulp.watch('./site1/src/js/*.js', ['js']);
});

gulp.task('default', ['connect', 'css', 'js', 'index', 'fonts', 'imgs', 'watch']);