(function (angular) {
  'use strict';

  angular.module('bz.dashboard')
    .config(config);

  /* @ngInject */
  function config($stateProvider) {
    $stateProvider.state('home.dashboard', {
      url: '/dashboard',
      templateUrl: 'dashboard/dashboard.html',
      controller: 'dashboardController',
      controllerAs: 'dashboard'
    });
  }

})(window.angular);