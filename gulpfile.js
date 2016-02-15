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

var syncInit = {

}

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
// blocks:js
gulp.task('blocks:js', function () {
	return gulp.src(['app/blocks/**'])
		.pipe(concat('blocks.js'))
		.pipe(gulp.dest(config.dist))
		.pipe(ngAnnotate())
		.pipe(uglify())
		.pipe(rename(function (path) {
			path.basename += ".min";
		}))
		.pipe(gulp.dest(config.dist));
});
// app:js
gulp.task('app:js', function () {
	return gulp.src(['app/core/core.js', 'app/app.js'])
		.pipe(concat('app.js'))
		.pipe(gulp.dest(config.dist))
		.pipe(ngAnnotate())
		.pipe(uglify())
		.pipe(rename(function (path) {
			path.basename += ".min";
		}))
		.pipe(gulp.dest(config.dist));
});
// module:js
gulp.task('module:js', function () {
	return gulp.src(['app/**/*.module.js'])
		.pipe(concat('module.js'))
		.pipe(gulp.dest(config.dist))
		.pipe(ngAnnotate())
		.pipe(uglify())
		.pipe(rename(function (path) {
			path.basename += ".min";
		}))
		.pipe(gulp.dest(config.dist));
});
// route:js
gulp.task('route:js', function () {
	return gulp.src(['app/**/*.route.js'])
		.pipe(concat('route.js'))
		.pipe(gulp.dest(config.dist))
		.pipe(ngAnnotate())
		.pipe(uglify())
		.pipe(rename(function (path) {
			path.basename += ".min";
		}))
		.pipe(gulp.dest(config.dist));
});
// main:js
gulp.task('main:js', function () {
	return gulp.src([
			'app/**/*.service.js',
			'app/**/*.factory.js',
			'app/**/*.provider.js',
			'app/**/*.controller.js',
			'app/**/*.directive.js'
		])
		.pipe(concat('main.js'))
		.pipe(gulp.dest(config.dist))
		.pipe(ngAnnotate())
		.pipe(uglify())
		.pipe(rename(function (path) {
			path.basename += ".min";
		}))
		.pipe(gulp.dest(config.dist));
});
// js
gulp.task('js', ['blocks:js', 'app:js', 'module:js', 'route:js', 'main:js'], function (cb) {
	return cb();
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

gulp.task('test', ['clean'], function () {

	gulp.start('pub');

	browserSync.init({
		port: 3000, // 端口
		server: {
			routes: { // 路由
				"/bower_components": "bower_components",
				"/static": "static",
				"/dist": "dist"
			}
		},
		startPath: "./dist", // 启动路径
	});

	gulp.watch('app/**/*');

	return gulp.watch(['dist/**/*']).on('change', browserSync.reload);
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