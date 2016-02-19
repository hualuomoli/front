(function (angular) {
  'use strict';

  angular.module('bz.grid')
    .config(config);

  /* @ngInject */
  function config($stateProvider) {
    $stateProvider.state('home.grid', {
      url: '/grid',
      templateUrl: 'ui-elements/grid/grid.html',
      controller: 'gridController',
      controllerAs: 'grid'
    });
  }

})(window.angular);