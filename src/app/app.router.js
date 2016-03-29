(function () {
  'use strict';

  angular.module('app')
    .config(config);

  /* @ngInject */
  function config($stateProvider, $urlRouterProvider, appHandlerProvider) {

    var route = appHandlerProvider.config.route;

    // default
    $urlRouterProvider.otherwise(route.root.url + route.dashboard.url);

    // app and dashboard
    $stateProvider
      .state(route.root.state, {
        abstract: true,
        url: route.root.url,
        templateUrl: route.root.templateUrl
      })
      .state(route.dashboard.state, {
        url: route.dashboard.url,
        templateUrl: route.dashboard.templateUrl
      })
  }

})();