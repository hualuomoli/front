(function (angular) {
  'use strict';

  angular.module('bz.login')
    .service('loginService', loginService);

  /* @ngInject */
  function loginService() {
    return {
      login: login
    };

    //
    function login(username, password) {
      if (!username || !password) {
        return false;
      }
      if (username === 'admin' && password === 'admin') {
        return true;
      }
      return false;
    }
  }

})(window.angular);