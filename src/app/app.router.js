(function (angular) {
  'use strict';

  angular.module('app')
    .config(config);

  /* @ngInject */
  function config($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/app/dashboard');

    $stateProvider
      .state('app', {
        abstract: true,
        url: '/app',
        templateUrl: 'tpl/app.html'
      })
      .state('app.dashboard', {
        url: '/dashboard',
        template: 'tpl/dashboard.html'
      })
  }

})(window.angular);