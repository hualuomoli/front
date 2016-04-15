(function () {
  'use strict';

  angular.module('app')
    .config(config)
    .run(run);

  /* @ngInject */
  function config(testHandlerProvider) {
    testHandlerProvider.config.enable = true;
  }


  /* @ngInject */
  function run(testHandler, testCors) {
    if (!testHandler.config.enable) {
      return;
    }
    // cors
    testCors.call();
  }

})();