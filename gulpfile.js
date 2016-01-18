// 
"use strict";
//
var gulp = require('gulp'),
	path = require('path'),
	// clean
	rimraf = require('gulp-rimraf'),
	// async reload browser
	browserSync = require('browser-sync').create();

// config
var config = {
	dev: 'temp',
	pro: 'dist'
};

/////////////////////////////////////////////////////////////////////////////////
///////////////////////////////   development   /////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////

// clean dev folder
gulp.task('clean:dev', function () {
	return gulp.src(config.dev, {
			read: false
		})
		.pipe(rimraf());
});

// copy dependency to dev/assets
gulp.task('assets:copy:dev', function () {
	return gulp.src(['bower_components/**/*'], {
			base: 'bower_components'
		})
		.pipe(gulp.dest(path.join(config.dev, 'assets')));
});

// copy static file to dev/static
gulp.task('static:copy:dev', function () {
	return gulp.src(['static/**/*'], {
			base: 'static'
		})
		.pipe(gulp.dest(path.join(config.dev, 'static')));
});

// copy css/image/html to dev
gulp.task('views:copy:dev', function () {
	return gulp.src(['views/**/*'], {
			base: 'views'
		})
		.pipe(gulp.dest(config.dev));
});

// copy angularjs to dev
gulp.task('app:copy:dev', function () {
	return gulp.src(['app/**/*'], {
			base: 'app'
		})
		.pipe(gulp.dest(config.dev));
});

// copy
gulp.task('copy:dev', ['assets:copy:dev', 'static:copy:dev', 'views:copy:dev', 'app:copy:dev'], function (cb) {
	return cb();
});

// watch
gulp.task('watch:dev', ['copy:dev'], function (cb) {
	gulp.watch(['app/**/*'], ['app:copy:dev']); // angularjs
	gulp.watch(['views/**/*'], ['views:copy:dev']); // views

	return cb();
});

// browserSync
gulp.task('browser-sync:dev', ['watch:dev'], function () {

	browserSync.init({
		server: {
			baseDir: config.dev
		}
	});

	return gulp.watch([config.dev + '**/*']).on('change', browserSync.reload);
});

gulp.task('dev', ['clean:dev'], function () {
	return gulp.start('browser-sync:dev');
});

/////////////////////////////////////////////////////////////////////////////////
///////////////////////////////   production   /////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////

// clean pro folder
gulp.task('clean:pro', function () {
	return gulp.src(config.pro, {
			read: false
		})
		.pipe(rimraf());
});

// copy dependency to pro/assets
gulp.task('assets:copy:pro', function () {
	return gulp.src(['bower_components/**/*'], {
			base: 'bower_components'
		})
		.pipe(gulp.dest(path.join(config.pro, 'assets')));
});

// copy static file to pro/static
gulp.task('static:copy:pro', function () {
	return gulp.src(['static/**/*'], {
			base: 'static'
		})
		.pipe(gulp.dest(path.join(config.pro, 'static')));
});

// copy
gulp.task('copy:pro', ['assets:copy:pro', 'static:copy:pro'], function (cb) {
	return cb();
});

// optimize angularjs to pro
gulp.task('app:minify:pro', function () {
	return gulp.src(['app/**/*'], {
			base: 'app'
		})
		.pipe(gulp.dest(config.pro));
});

// minify css to pro
gulp.task('css:minify:pro', function () {
	return gulp.src(['views/**/*.css'], {
			base: 'views'
		})
		.pipe(gulp.dest(config.pro));
});

// minify html to pro
gulp.task('html:minify:pro', function () {
	return gulp.src(['views/**/*.html', 'views/**/*.htm'], {
			base: 'views'
		})
		.pipe(gulp.dest(config.pro));
});

gulp.task('views:minify:pro', ['css:minify:pro', 'html:minify:pro'], function (cb) {
	return cb();
});

gulp.task('minify:pro', ['app:minify:pro', 'views:minify:pro'], function (cb) {
	return cb();
});

// watch
gulp.task('watch:pro', ['copy:pro', 'minify:pro'], function (cb) {
	gulp.watch(['app/**/*'], ['app:minify:pro']); // angularjs
	gulp.watch(['views/**/*.css'], ['css:minify:pro']); // views/css
	gulp.watch(['views/**/*.html', 'views/**/*.htm'], ['html:minify:pro']); // views/html

	return cb();
});

// browserSync
gulp.task('browser-sync:pro', ['watch:pro'], function () {

	browserSync.init({
		server: {
			baseDir: config.pro
		}
	});

	return gulp.watch([config.pro + '**/*']).on('change', browserSync.reload);
});

gulp.task('pro', ['clean:pro'], function () {
	return gulp.start('browser-sync:pro');
});

/////////////////////////////////////////////////////////////////////////////////
///////////////////////////////   default task   ////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
// default is pro
gulp.task('default', [], function () {
	gulp.start('pro');
});