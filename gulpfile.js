var gulp = require('gulp');
// clean
var clean = require('gulp-clean');
// concat
var concat = require('gulp-concat');
// rename
var rename = require("gulp-rename");

// js
var jshint = require('gulp-jshint');
var sourcemaps = require('gulp-sourcemaps');
var ngAnnotate = require('gulp-ng-annotate');
var uglify = require('gulp-uglify');

var cleanCSS = require('gulp-clean-css');

// html
var htmlreplace = require('gulp-html-replace');

// md5
var rev = require('gulp-rev');

// browser
var browserSync = require('browser-sync').create();

var tmp = {
  // css-assets
  // css-app
  // js-assets
  // js-app
};

// clean
gulp.task('clean', function () {
  return gulp.src('./client/dist', {
      read: false
    })
    .pipe(clean());
});

// js - assets
gulp.task('js:assets', function () {
  return gulp.src([
      './client/bower_components/jquery/dist/jquery.js',
      './client/bower_components/bootstrap/dist/js/bootstrap.js',
      './client/bower_components/angular/angular.js',
      './client/bower_components/angular-ui-router/release/angular-ui-router.js',
      './client/bower_components/oclazyload/dist/ocLazyLoad.js',

      './client/bower_components/ngstorage/ngStorage.js',
      './client/bower_components/angular-animate/angular-animate.js',
      './client/bower_components/angular-cookies/angular-cookies.js',
      './client/bower_components/angular-resource/angular-resource.js',
      './client/bower_components/angular-sanitize/angular-sanitize.js',
      './client/bower_components/angular-touch/angular-touch.js',

      './client/bower_components/angular-bootstrap/ui-bootstrap-tpls.js'
    ])
    .pipe(concat('assets.js'))
    .pipe(rev())
    .pipe(rename(function (path) {
      tmp['js-assets'] = path.basename;
    }))
    .pipe(gulp.dest('./client/dist/js'))
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(rename(function (path) {
      path.basename += ".min";
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./client/dist/js'));
});

// js - app
gulp.task('js:app', function () {
  return gulp.src([
      './client/src/app/**/*.module.js', // module
      './client/src/app/**/*.service.js', // service
      './client/src/app/**/*.factory.js', // factory
      './client/src/app/**/*.provider.js', // provider
      './client/src/app/**/*.controller.js', // controller
      './client/src/app/**/*.config.js', // config
      './client/src/app/**/*.router.js', // router

      './client/src/js/**/*'
    ])
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(concat('app.js'))
    .pipe(rev())
    .pipe(rename(function (path) {
      tmp['js-app'] = path.basename;
    }))
    .pipe(ngAnnotate())
    .pipe(gulp.dest('./client/dist/js'))
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(rename(function (path) {
      path.basename += ".min";
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./client/dist/js'));
});

// js
gulp.task('js', ['js:assets', 'js:app'], function (cb) {
  return cb();
});

// fonts
gulp.task('fonts', function () {
  return gulp.src([
      './client/bower_components/bootstrap/dist/fonts/**/*',
      './client/bower_components/font-awesome/fonts/**/*',
      './client/bower_components/simple-line-icons/fonts/**/*',
      './client/src/fonts/**/*'
    ])
    .pipe(gulp.dest('./client/dist/fonts'));
});

// css - assets
gulp.task('css:assets', ['fonts'], function () {
  return gulp.src([
      './client/bower_components/bootstrap/dist/css/bootstrap.css',
      './client/bower_components/font-awesome/css/font-awesome.css',
      './client/bower_components/simple-line-icons/css/simple-line-icons.css'
    ])
    .pipe(concat('assets.css'))
    .pipe(rev())
    .pipe(rename(function (path) {
      tmp['css-assets'] = path.basename;
    }))
    .pipe(gulp.dest('./client/dist/css'))
    .pipe(sourcemaps.init())
    .pipe(cleanCSS())
    .pipe(rename(function (path) {
      path.basename += ".min";
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./client/dist/css'));
});

// css - app
gulp.task('css:app', function () {
  return gulp.src([
      './client/src/css/animate.css',
      './client/src/css/font.css',
      './client/src/css/app.css'
    ])
    .pipe(concat('app.css'))
    .pipe(rev())
    .pipe(rename(function (path) {
      tmp['css-app'] = path.basename;
    }))
    .pipe(gulp.dest('./client/dist/css'))
    .pipe(sourcemaps.init())
    .pipe(cleanCSS())
    .pipe(rename(function (path) {
      path.basename += ".min";
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./client/dist/css'));

});

// css
gulp.task('css', ['css:assets', 'css:app'], function (cb) {
  return cb();
});

// image
gulp.task('image', function () {
  return gulp.src([
      './client/src/img/**/*'
    ])
    .pipe(gulp.dest('./client/dist/img'));
});

// html - index
gulp.task('html:index', ['css'], function () {
  return gulp.src('./client/src/index.html')
    .pipe(htmlreplace({
      // css
      'css-assets': './css/' + tmp['css-assets'] + '.css',
      'css-app': './css/' + tmp['css-app'] + '.css',
      // js
      'js-assets': './js/' + tmp['js-assets'] + '.js',
      'js-app': './js/' + tmp['js-app'] + '.js',
    }))
    .pipe(gulp.dest('./client/dist'));
});

// html - tpl
gulp.task('html:tpl', function () {
  return gulp.src(
      ['./client/src/tpl/**/*']
    )
    .pipe(gulp.dest('./client/dist/tpl'));
});

// html
gulp.task('html', ['html:index', 'html:tpl'], function (cb) {
  return cb();
});

// watch
gulp.task('watch', ['js', 'css', 'image', 'html'], function (cb) {

  browserSync.init({
    port: 3000, // 端口
    server: {
      baseDir: ['./client/dist'], // 主目录
      index: "index.html", // 主页
      routes: { // 路由
        "/bower_components": "bower_components",
      }
    },
    startPath: "./" // 启动路径
  });

  // js - app
  gulp.watch('./client/src/app/**/*', ['js:app']).on('change', browserSync.reload);
  gulp.watch('./client/src/tpl/**/*', ['html:tpl']).on('change', browserSync.reload);
  gulp.watch('./client/src/index.html', ['html:index']).on('change', browserSync.reload);
  gulp.watch('./client/src/css/**/*', ['css:app']).on('change', browserSync.reload);

  return cb();

});

// default
gulp.task('default', ['clean'], function () {
  return gulp.start('watch');
});