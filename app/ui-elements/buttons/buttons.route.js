(function (angular) {
  'use strict';

  angular.module('bz.buttons')
    .config(config);

  /* @ngInject */
  function config($stateProvider) {
    $stateProvider.state('home.buttons', {
      url: '/buttons',
      templateUrl: 'ui-elements/buttons/buttons.html',
      controller: 'buttonsController',
      controllerAs: 'buttons'
    });
  }

})(window.angular);