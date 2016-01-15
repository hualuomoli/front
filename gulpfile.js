// 
"use strict";
//
var gulp = require('gulp'),
	path = require('path'),
	gulpif = require('gulp-if'),
	ignore = require('gulp-ignore'),
	// rename
	rename = require('gulp-rename'),
	// clean
	rimraf = require('gulp-rimraf'),
	// source
	sourcemaps = require('gulp-sourcemaps'),
	// js
	uglify = require("gulp-uglify"),
	// css
	cssnano = require('gulp-cssnano'),
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	cssVersion = require('gulp-make-css-url-version'),
	// html
	htmlmin = require('gulp-htmlmin'),
	// async reload browser
	browserSync = require('browser-sync').create();

// config
var config = {
	sass: {
		outputStyle: 'expanded'
	},
	autoprefixer: {
		browsers: ['last 2 versions', 'IE 8'],
		cascade: false
	},
	cssnano: {

	},
	htmlmin: {
		collapseWhitespace: true
	},
	dest: 'dist'
};

// clean app folder
gulp.task('clean', function () {
	return gulp.src(config.dest, {
			read: false
		})
		.pipe(rimraf());
});

// angular js
gulp.task('js', function () {
	return gulp.src(['app/**/*'], {
			base: 'app'
		})
		.pipe(gulp.dest(config.dest)); // min
});

// sass
gulp.task('sass', function () {
	return gulp.src(['static/scss/**/*'], {
			base: 'static'
		})
		// compile sass to css
		.pipe(sass(config.sass).on('error', sass.logError))
		.pipe(cssVersion())
		.pipe(autoprefixer(config.autoprefixer))
		.pipe(sourcemaps.init())
		.pipe(cssnano(config.cssnano))
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest(config.dest));
});

// css
gulp.task('css', function () {
	return gulp.src(['static/css/**/*'], {
			base: 'static'
		})
		.pipe(cssVersion())
		.pipe(autoprefixer(config.autoprefixer))
		.pipe(sourcemaps.init())
		.pipe(cssnano(config.cssnano))
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest(config.dest));
});

// html
gulp.task('html', function () {
	return gulp.src(['views/**/*'], {
			base: 'views'
		})
		.pipe(htmlmin(config.htmlmin))
		.pipe(gulp.dest(config.dest));
});

// image
gulp.task('image', function () {
	return gulp.src(['static/img**/*'], {
			base: 'static'
		})
		.pipe(gulp.dest(config.dest));
});

// build
gulp.task('build', ['clean'], function (cb) {
	gulp.start('js');
	gulp.start('sass');
	gulp.start('css');
	gulp.start('html');
	return cb();
});

// watch
gulp.task('watch', ['build'], function (cb) {
	gulp.watch(['app/**/*'], ['js']); // js
	gulp.watch(['static/scss/**/*'], ['sass']); // cass
	gulp.watch(['static/css/**/*'], ['css']); // css
	gulp.watch(['static/img/**/*'], ['image']); // css
	gulp.watch(['views/**/*'], ['html']); // html

	return cb();
});

// browserSync
gulp.task('browser-sync', function () {

	gulp.src(['bower_components/**/*'], {
			base: 'bower_components'
		})
		.pipe(gulp.dest(path.join(config.dest, 'assets')));

	browserSync.init({
		server: {
			baseDir: config.dest
		}
	});

	return gulp.watch([config.dest + '/**/*']).on('change', browserSync.reload);
});

// default
gulp.task('default', ['watch'], function () {
	gulp.start('browser-sync');
});