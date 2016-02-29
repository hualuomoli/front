'use static';

var gulp = require('gulp'),
  // clean
  rimraf = require('gulp-rimraf'),
  // concat
  concat = require('gulp-concat'),
  // rename
  rename = require("gulp-rename"),

  // min
  // css
  sourcemaps = require('gulp-sourcemaps'),
  cssversion = require('gulp-make-css-url-version'),
  autoprefixer = require('gulp-autoprefixer'),
  cssmin = require('gulp-minify-css'),

  // js
  jshint = require('gulp-jshint'),
  ngAnnotate = require('gulp-ng-annotate'),
  uglify = require('gulp-uglify'),

  // html
  minifyHTML = require('gulp-minify-html'),

  // image
  imagemin = require('gulp-imagemin'),
  pngquant = require('imagemin-pngquant'),

  // async reload browser
  browserSync = require('browser-sync').create();

// config
var config = {
  test: 'test',
  dist: 'dist'
};

///////////////////////////////////////////////////
//////////////////////  dev  //////////////////////
///////////////////////////////////////////////////
// dev
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
      }
    },
    startPath: "./app/", // 启动路径
    // browser: ["google chrome"], // 默认打开浏览器
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

  return gulp.watch(['app/**/*']).on('change', browserSync.reload);
});

///////////////////////////////////////////////////
//////////////////////  test  /////////////////////
///////////////////////////////////////////////////
// clean 
gulp.task('clean:test', function () {
  return gulp.src(config.test, {
      read: false
    })
    .pipe(rimraf());
});
// app:js
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
      'app/core/core.directive.js',
      'app/core/core.config.js',
      // app
      'app/app.js'
    ])
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(concat('app.js'))
    .pipe(ngAnnotate())
    .pipe(gulp.dest(config.test))
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(rename(function (path) {
      path.basename += ".min";
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(config.test));
});
// bussiness:module:js
gulp.task('bz:module:js', function () {
  return gulp.src([
      '!app/blocks/**/*.js',
      '!app/core/**/*.js',
      '!app/app.js',

      'app/**/*.module.js'
    ])
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(concat('bz-module.js'))
    .pipe(ngAnnotate())
    .pipe(gulp.dest(config.test))
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(rename(function (path) {
      path.basename += ".min";
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(config.test));
});
// bussiness:route:js
gulp.task('bz:route:js', function () {
  return gulp.src([
      '!app/blocks/**/*.js',
      '!app/core/**/*.js',
      '!app/app.js',

      'app/**/*.route.js'
    ])
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(concat('bz-route.js'))
    .pipe(ngAnnotate())
    .pipe(gulp.dest(config.test))
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(rename(function (path) {
      path.basename += ".min";
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(config.test));
});
// business
gulp.task('bz:js', function () {
  return gulp.src([
      '!app/blocks/**/*.js',
      '!app/core/**/*.js',
      '!app/app.js',

      '!app/**/*.module.js',
      '!app/**/*.route.js',

      'app/**/*.provider.js',
      'app/**/*.factory.js',
      'app/**/*.service.js',
      'app/**/*.config.js',
      'app/**/*.controller.js',
      'app/**/*.directive.js'

    ])
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(concat('bz.js'))
    .pipe(ngAnnotate())
    .pipe(gulp.dest(config.test))
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(rename(function (path) {
      path.basename += ".min";
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(config.test));
});
// js:test
gulp.task('js:test', ['app:js', 'bz:module:js', 'bz:route:js', 'bz:js'], function (cb) {
  return cb();
});
// css:test
gulp.task('css:test', function () {
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
    .pipe(gulp.dest(config.test));
});
// image:test
gulp.task('image:test', function () {
  return gulp.src(["app/**/*.jpg"], {
      base: 'app'
    })
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{
        removeViewBox: false
      }],
      use: [pngquant()]
    }))
    .pipe(gulp.dest(config.test));
});
// html:test
gulp.task('html:test', function () {
  return gulp.src(['!app/index*.html', 'app/**/*.html'], {
      base: 'app'
    })
    .pipe(minifyHTML({
      empty: true
    }))
    .pipe(gulp.dest(config.test));
});
// index:html
gulp.task('index:html:test', function () {
  return gulp.src('app/index-split.html')
    .pipe(rename(function (path) {
      path.basename = "index";
    }))
    .pipe(minifyHTML({
      empty: true
    }))
    .pipe(gulp.dest(config.test));
});

// test
gulp.task('test', ['clean:test'], function () {
  gulp.start('js:test');
  gulp.start('css:test');
  gulp.start('image:test');
  gulp.start('html:test');
  gulp.start('index:html:test');

  browserSync.init({
    port: 3000, // 端口
    server: {
      baseDir: ['./'], // 主目录
      index: "index.html", // 主页
      routes: { // 路由
        "/bower_components": "bower_components",
        "/static": "static"
      }
    },
    startPath: "./" + config.test + "/" // 启动路径
  });

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
      'app/**/*.directive.js',
      'app/**/*.route.js',
      'app/app.js'
    ])
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(concat('main.js'))
    .pipe(ngAnnotate())
    .pipe(gulp.dest(config.dist))
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(rename(function (path) {
      path.basename += ".min";
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(config.dist));
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
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{
        removeViewBox: false
      }],
      use: [pngquant()]
    }))
    .pipe(gulp.dest(config.dist));
});
// html
gulp.task('html', function () {
  return gulp.src(['!app/index*.html', 'app/**/*.html'], {
      base: 'app'
    })
    .pipe(minifyHTML({
      empty: true
    }))
    .pipe(gulp.dest(config.dist));
});
// index:html
gulp.task('index:html', function () {
  return gulp.src('app/index-main.html')
    .pipe(rename(function (path) {
      path.basename = "index";
    }))
    .pipe(minifyHTML({
      empty: true
    }))
    .pipe(gulp.dest(config.dist));
});

// test
gulp.task('pub', ['clean'], function () {
  gulp.start('js');
  gulp.start('css');
  gulp.start('image');
  gulp.start('html');
  gulp.start('index:html');

  browserSync.init({
    port: 3000, // 端口
    server: {
      baseDir: ['./'], // 主目录
      index: "index.html", // 主页
      routes: { // 路由
        "/bower_components": "bower_components",
        "/static": "static"
      }
    },
    startPath: "./" + config.dist + "/" // 启动路径
  });

});

///////////////////////////////////////////////////
////////////////////  default  ////////////////////
///////////////////////////////////////////////////
// default
gulp.task('default', function () {
  return gulp.start('dev');
});