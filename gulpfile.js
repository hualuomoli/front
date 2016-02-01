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
	dist: 'dist'
};

var syncInit = {
	https: false, // 是否使用https
	host: "localhost", // 主机地址
	port: 3000, // 端口
	server: {
		directory: false, // 显示目录
		baseDir: [config.dist], // 主目录
		index: "index.html", // 主页
		routes: { // 路由
			"/assets": "assets",
			"/static": "static",
			"/app": "app",
			"/views": "views"
		}
	},
	startPath: "/views", // 启动路径
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
	open: "external" // 默认打开本地(local/external)
}

//////////////////////////////////////////////////////
//////////////////////  common  //////////////////////
//////////////////////////////////////////////////////

// clean dist folder
gulp.task('clean', function () {
	return gulp.src(config.dist, {
			read: false
		})
		.pipe(rimraf());
});

// copy bower dependency
gulp.task('assets', function () {
	return gulp.src(['assets/**/*'], {
			base: 'assets'
		})
		.pipe(gulp.dest(path.join(config.dist, 'assets')));
});

// copy static folder
gulp.task('static', function () {
	return gulp.src(['static/**/*'], {
			base: 'static'
		})
		.pipe(gulp.dest(path.join(config.dist, 'static')));
});

// common
gulp.task('common', ['assets', 'static'], function (cb) {
	return cb();
});

/////////////////////////////////////////////////////////
////////////////////// development //////////////////////
/////////////////////////////////////////////////////////

// copy css/js/html
gulp.task('views:dev', function () {
	return gulp.src(['views/**/*'], {
			base: 'views'
		})
		.pipe(gulp.dest(path.join(config.dist, 'views')));
});

// copy angularjs
gulp.task('app:dev', function () {
	return gulp.src(['app/**/*'], {
			base: 'app'
		})
		.pipe(gulp.dest(path.join(config.dist, 'app')));
});

// watch
gulp.task('watch', ['common', 'views:dev', 'app:dev'], function (cb) {

	gulp.watch(['views/**/*'], ['views:dev']); // views
	gulp.watch(['app/**/*'], ['app:dev']); // angularjs

	return cb();
});

// browserSync
gulp.task('browser-sync', ['watch'], function () {

	browserSync.init(syncInit);

	return gulp.watch([config.dist + '/**/*']).on('change', browserSync.reload);
});

////////////////////////////////////////////////////
////////////////////// tasks  //////////////////////
////////////////////////////////////////////////////
// default
gulp.task('default', ['clean'], function () {
	return gulp.start('browser-sync');
});