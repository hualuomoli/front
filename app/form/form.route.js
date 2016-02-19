(function (angular) {
  'use strict';

  angular.module('bz.form')
    .config(config);

  /* @ngInject */
  function config($stateProvider) {
    $stateProvider.state('home.form', {
      url: '/form',
      templateUrl: 'form/form.html',
      controller: 'formController',
      controllerAs: 'form'
    });
  }

})(window.angular);