(function (angular) {
  'use strict';

  angular.module('bz.login')
    .controller('loginController', loginController);

  /* @ngInject */
  function loginController($scope, $state, $timeout, loginService, logger) {
    /* jshint validthis:true */
    var login = this;
    login.remember = false;
    login.error = false;
    login.errorMsg = '';
    login.username = '';
    login.password = '';

    $scope.doLogin = doLogin;

    ///////////////////////////////////
    function doLogin() {
      logger.log(login);
      if (loginService.login(login.username, login.password)) {
        $state.go('home.dashboard');
      } else {
        login.error = true;
        login.errorMsg = 'username or password error!';
      }
    }

    $timeout(function () {
      login.remember = true;
    }, 1000);

  }

})(window.angular);