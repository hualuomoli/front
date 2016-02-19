(function (angular) {
  'use strict';

  angular.module('bz.table')
    .config(config);

  /* @ngInject */
  function config($stateProvider) {
    $stateProvider.state('home.table', {
      url: '/table',
      templateUrl: 'table/table.html',
      controller: 'tableController',
      controllerAs: 'table'
    });
  }

})(window.angular);