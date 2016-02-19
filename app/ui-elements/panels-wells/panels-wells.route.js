(function (angular) {
  'use strict';

  angular.module('bz.panels-wells')
    .config(config);

  /* @ngInject */
  function config($stateProvider) {
    $stateProvider.state('home.panelsWells', {
      url: '/panels-wells',
      templateUrl: 'ui-elements/panels-wells/panels-wells.html',
      controller: 'panelsWellsController',
      controllerAs: 'panelsWells'
    });
  }

})(window.angular);