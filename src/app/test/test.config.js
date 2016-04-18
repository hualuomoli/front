(function () {
  'use strict';

  angular.module('app')
    .config(config)
    .run(run);

  /* @ngInject */
  function config(testHandlerProvider, httpHandlerProvider) {
    testHandlerProvider.config.enable = true;
    httpHandlerProvider.config.baseUrl = 'http://localhost:80/web';
  }


  /* @ngInject */
  function run(testHandler, testCorsService, http) {
    if (!testHandler.config.enable) {
      return;
    }

    // testCorsService.ajaxCross();
    // testCorsService.ngCross();
    // testCorsService.httpCross();

    testCorsService.security();

  }

})();