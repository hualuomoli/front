// 
"use strict";
//
var gulp = require('gulp'),
	path = require('path'),
	// clean
	rimraf = require('gulp-rimraf'),
	concat = require('gulp-concat'),
	rename = require("gulp-rename"),
	// min
	// css
	sourcemaps = require('gulp-sourcemaps'),
	cssversion = require('gulp-make-css-url-version'),
	autoprefixer = require('gulp-autoprefixer'),
	cssmin = require('gulp-minify-css'),

	// js
	ngAnnotate = require('gulp-ng-annotate'),
	uglify = require('gulp-uglify'),

	// html
	minifyHTML = require('gulp-minify-html'),

	// amdOptimize = require("amd-optimize"),
	// async reload browser
	browserSync = require('browser-sync').create();

// config
var config = {
	dist: 'dist'
};

///////////////////////////////////////////////////
//////////////////////  dev  //////////////////////
///////////////////////////////////////////////////
gulp.task('dev', function () {

	browserSync.init({
		https: false, // 是否使用https
		host: "localhost", // 主机地址
		port: 3000, // 端口
		server: {
			directory: false, // 显示目录
			baseDir: ['./'], // 主目录
			index: "index.html", // 主页
			routes: { // 路由
				"/bower_components": "bower_components",
				"/static": "static",
				"/app": "app"
			}
		},
		startPath: "./", // 启动路径
		// browser: ["Chrome", "Microsoft IE"], // 默认打开浏览器
		// reloadDelay: 200, // 延迟加载时间(毫秒)
		// ui: { // UI 配置
		// 	port: 3001 // 
		// },
		// ghostMode: { // ghost模式配置
		// 	clicks: true,
		// 	forms: true,
		// 	scroll: true
		// },
		// logLevel: "debug",
		// logPrefix: "Front",
		open: "local" // 默认打开本地(local/external)
	});

	return gulp.watch(['app/**/*', 'index.html']).on('change', browserSync.reload);
});

///////////////////////////////////////////////////
//////////////////////  pub  //////////////////////
///////////////////////////////////////////////////

// clean 
gulp.task('clean', function () {
	return gulp.src(config.dist, {
			read: false
		})
		.pipe(rimraf());
});
// js
gulp.task('js', function () {
	return gulp.src([
			'app/**/*.module.js',
			'app/**/*.provider.js',
			'app/**/*.factory.js',
			'app/**/*.config.js',
			'app/**/*.service.js',
			'app/**/*.controller.js',
			'app/**/*.route.js',
			'app/app.js'
		])
		.pipe(concat('main.js'))
		.pipe(ngAnnotate())
		.pipe(gulp.dest(config.dist))
		.pipe(uglify())
		.pipe(rename(function (path) {
			path.basename += ".min";
		}))
		.pipe(gulp.dest(config.dist));;
});

// css
gulp.task('css', function () {
	return gulp.src("app/**/*.css", {
			base: 'app'
		})
		.pipe(sourcemaps.init())
		.pipe(cssversion())
		.pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))
		.pipe(cssmin())
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest(config.dist));
});

// image
gulp.task('image', function () {
	return gulp.src(["app/**/*.jpg"], {
			base: 'app'
		})
		.pipe(gulp.dest(config.dist));
});

gulp.task('html', function () {
	return gulp.src(['!app/index.html', 'app/**/*.html'], {
			base: 'app'
		})
		.pipe(minifyHTML({
			empty: true
		}))
		.pipe(gulp.dest(config.dist));
});

// index:html
gulp.task('index:html', function () {
	return gulp.src('app/index-dist.html')
		.pipe(rename(function (path) {
			path.basename = "index";
		}))
		.pipe(minifyHTML({
			empty: true
		}))
		.pipe(gulp.dest(config.dist));
});

// publish
gulp.task('pub', ['js', 'css', 'image', 'html', 'index:html'], function (cb) {
	return cb();
});

// default
gulp.task('default', ['clean'], function () {
	return gulp.start('pub');
});

// js
gulp.task("requirejs", function () {
	return gulp.src("app/**/*.js", {
			base: 'app'
		})
		.pipe(amdOptimize("main", {
			paths: {
				'angular': 'bower_components/angular/angular.min',
				'angular-ui-router': 'bower_components/angular-ui-router/release/angular-ui-router.min',
				'angular-async-loader': 'bower_components/angular-async-loader/dist/angular-async-loader.min',
				'jquery': 'bower_components/jquery/dist/jquery.min',
				'bootstrap': 'bower_components/bootstrap/dist/js/bootstrap.min',
				'metisMenu': 'bower_components/metisMenu/dist/metisMenu.min'
			},
			shim: {
				'angular': {
					'exports': 'angular'
				},
				'angular-ui-router': {
					'deps': ['angular']
				},
				'bootstrap': {
					'deps': ['jquery']
				},
				'metisMenu': {
					'deps': ['jquery']
				}
			},
			exclude: ['angular', 'angular-ui-router', 'angular-async-loader', 'bootstrap', 'jquery', 'metisMenu']
		}))
		.pipe(gulp.dest(config.dist));
});

///////////////////////////////////////////////////
/////////////////// js test ///////////////////////
///////////////////////////////////////////////////
// blocks - logger
gulp.task('logger:js', function () {
	return gulp.src([
			'app/blocks/logger/logger.module.js',
			'app/blocks/logger/logger.factory.js'
		])
		.pipe(concat('logger.js'))
		.pipe(ngAnnotate())
		.pipe(gulp.dest(config.dist))
		.pipe(uglify())
		.pipe(rename(function (path) {
			path.basename += ".min";
		}))
		.pipe(gulp.dest(config.dist));
});
// blocks - exception
gulp.task('exception:js', function () {
	return gulp.src([
			'app/blocks/exception/exception.module.js',
			'app/blocks/exception/exception.provider.js',
			'app/blocks/exception/exception.config.js'
		])
		.pipe(concat('exception.js'))
		.pipe(ngAnnotate())
		.pipe(gulp.dest(config.dist))
		.pipe(uglify())
		.pipe(rename(function (path) {
			path.basename += ".min";
		}))
		.pipe(gulp.dest(config.dist));
});
// blocks - routehelper
gulp.task('routehelper:js', function () {
	return gulp.src([
			'app/blocks/routehelper/routehelper.module.js',
			'app/blocks/routehelper/routehelper.factory.js'
		])
		.pipe(concat('routehelper.js'))
		.pipe(ngAnnotate())
		.pipe(gulp.dest(config.dist))
		.pipe(uglify())
		.pipe(rename(function (path) {
			path.basename += ".min";
		}))
		.pipe(gulp.dest(config.dist));
});
// core
gulp.task('core:js', function () {
	return gulp.src([
			'app/core/core.module.js',
			'app/core/core.config.js'
		])
		.pipe(concat('core.js'))
		.pipe(ngAnnotate())
		.pipe(gulp.dest(config.dist))
		.pipe(uglify())
		.pipe(rename(function (path) {
			path.basename += ".min";
		}))
		.pipe(gulp.dest(config.dist));
});
// blocks/*,core/*,app.js
gulp.task('app:js', function () {
	return gulp.src([
			// logger
			'app/blocks/logger/logger.module.js',
			'app/blocks/logger/logger.factory.js',
			// exception
			'app/blocks/exception/exception.module.js',
			'app/blocks/exception/exception.provider.js',
			'app/blocks/exception/exception.config.js',
			// routehelper
			'app/blocks/routehelper/routehelper.module.js',
			'app/blocks/routehelper/routehelper.factory.js',
			// core
			'app/core/core.module.js',
			'app/core/core.config.js',
			// app
			'app/app.js'
		])
		.pipe(concat('app.js'))
		.pipe(ngAnnotate())
		.pipe(gulp.dest(config.dist))
		.pipe(uglify())
		.pipe(rename(function (path) {
			path.basename += ".min";
		}))
		.pipe(gulp.dest(config.dist));
});

// module, route
gulp.task('bz:mr:js', function () {
	return gulp.src([
			'!app/blocks/**/*.js',
			'!app/core/**/*.js',
			'!app/app.js',

			'app/**/*.module.js',
			'app/**/*.route.js'
		])
		.pipe(concat('bz-mr.js'))
		.pipe(ngAnnotate())
		.pipe(gulp.dest(config.dist))
		.pipe(uglify())
		.pipe(rename(function (path) {
			path.basename += ".min";
		}))
		.pipe(gulp.dest(config.dist));;
});
// business
gulp.task('bz:js', function () {
	return gulp.src([
			'!app/blocks/**/*.js',
			'!app/core/**/*.js',
			'!app/app.js',

			'app/**/*.module.js',
			'app/**/*.provider.js',
			'app/**/*.factory.js',
			'app/**/*.service.js',
			'app/**/*.config.js',
			'app/**/*.controller.js',
			'app/**/*.route.js',
		])
		.pipe(concat('bz.js'))
		.pipe(ngAnnotate())
		.pipe(gulp.dest(config.dist))
		.pipe(uglify())
		.pipe(rename(function (path) {
			path.basename += ".min";
		}))
		.pipe(gulp.dest(config.dist));;
});