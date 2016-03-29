(function () {
  'use strict';

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

  var browserSync = require('browser-sync').create();

  // clean
  gulp.task('clean', function () {
    return gulp.src('./dist', {
        read: false
      })
      .pipe(clean());
  });

  // uglify js
  gulp.task('js', function () {
    return gulp.src([
        './src/app/**/*.module.js', // module
        './src/app/**/*.factory.js', // factory
        './src/app/**/*.service.js', // service
        './src/app/**/*.provider.js', // provider
        './src/app/**/*.router.js', // router
        './src/app/**/*.config.js', // config
        './src/app/**/*.controller.js' // controller
      ])
      .pipe(jshint())
      .pipe(jshint.reporter('default'))
      .pipe(concat('app.js'))
      .pipe(ngAnnotate())
      .pipe(gulp.dest('./dist'))
      .pipe(sourcemaps.init())
      .pipe(uglify())
      .pipe(rename(function (path) {
        path.basename += ".min";
      }))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest('./dist'));
  });

  // app
  gulp.task('app', ['js'], function () {
    console.log('================');
    return gulp.src([
        './src/css/**/*',
        './src/js/**/*',
        './src/img/**/*',
        './src/fonts/**/*',
        './src/**/*.html'
      ], {
        base: './src'
      })
      .pipe(gulp.dest('./dist'));
  });

  // watch
  gulp.task('watch', ['app'], function () {

    browserSync.init({
      port: 3000, // 端口
      server: {
        baseDir: ['./dist'], // 主目录
        index: "index.html", // 主页
        routes: { // 路由
          "/bower_components": "bower_components",
        }
      },
      startPath: "./" // 启动路径
    });

    return gulp.watch('./src/**/*', ['app']).on('change', browserSync.reload);

  });

  // default
  gulp.task('default', ['clean'], function () {
    return gulp.start('watch');
  });

})();