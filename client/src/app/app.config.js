(function () {
  'use strict';

  angular.module('app')
    .config(config);

  /* @ngInject */
  function config($locationProvider, $ocLazyLoadProvider, appHandlerProvider) {


    $locationProvider.hashPrefix('!');
    // Without server side support html5 must be disabled.
    $locationProvider.html5Mode(false);

    // We configure ocLazyLoad to use the lib script.js as the async loader
    $ocLazyLoadProvider.config({
      debug: true,
      events: true
    });

    // appHandlerProvider.config.route.root.templateUrl = 'tpl/app.html';

  }

})();