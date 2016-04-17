// Karma configuration
// Generated on Wed Apr 13 2016 17:03:08 GMT+0800 (中国标准时间)

module.exports = function (config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: './',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      // assets
      '../bower_components/jquery/dist/jquery.js',
      '../bower_components/bootstrap/dist/js/bootstrap.js',
      '../bower_components/angular/angular.js',
      '../bower_components/angular-ui-router/release/angular-ui-router.js',
      '../bower_components/oclazyload/dist/ocLazyLoad.js',
      '../bower_components/ngstorage/ngStorage.js',
      '../bower_components/angular-animate/angular-animate.js',
      '../bower_components/angular-cookies/angular-cookies.js',
      '../bower_components/angular-resource/angular-resource.js',
      '../bower_components/angular-sanitize/angular-sanitize.js',
      '../bower_components/angular-touch/angular-touch.js',
      '../bower_components/angular-bootstrap/ui-bootstrap-tpls.js',

      '../bower_components/front-angular-blocks/dist/front-angular-blocks.js',

      // app
      '../src/js/app.js',
      '../src/app/blocks/path/path.module.js',
      '../src/app/blocks/path/path.factory.js',
      '../src/app/blocks/logger/logger.module.js',
      '../src/app/blocks/logger/logger.factory.js',
      '../src/app/blocks/exception/exception.module.js',
      '../src/app/blocks/exception/exception.provider.js',
      '../src/app/blocks/exception/exception.config.js',
      '../src/app/blocks/routehelper/routehelper.module.js',
      '../src/app/blocks/routehelper/routehelper.factory.js',
      '../src/app/blocks/http/http.module.js',
      '../src/app/blocks/http/http.factory.js',
      '../src/app/blocks/http/http.provider.js',
      '../src/app/blocks/blocks.module.js',
      '../src/app/app.module.js',
      '../src/app/app.config.js',
      '../src/app/app.controller.js',
      '../src/app/app.router.js',


      // test assets
      '../node_modules/angular-mocks/angular-mocks.js',
      // test 
      './**/*.test.js'


    ],


    // list of files to exclude
    exclude: [],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {},


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}