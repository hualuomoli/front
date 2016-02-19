(function (angular) {
  'use strict';

  angular.module('bz.login')
    .config(config);

  /* @ngInject */
  function config($stateProvider) {
    $stateProvider.state('login', {
      url: '/login',
      templateUrl: 'login/login.html',
      controller: 'loginController',
      controllerAs: 'login'
    });
  }

})(window.angular);