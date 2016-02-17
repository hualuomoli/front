(function (angular) {
	'use strict';

	angular.module('bz.login')
		.controller('loginController', loginController);

	/* @ngInject */
	function loginController($scope, $state, $timeout, loginService, logger) {
		/* jshint validthis:true */
		var login = this;
		login.remember = false;
		login.error = '';
		login.username = '';
		login.password = '';

		$scope.doLogin = doLogin;

		///////////////////////////////////
		function doLogin() {
			logger.log(login);
			if (loginService.login(login.username, login.password)) {
				$state.go('home.dashboard');
			} else {
				login.error = 'username or password error!';
			}
		}

		$timeout(function () {
			login.remember = true;
		}, 1000);

	}

})(angular);