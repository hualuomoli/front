(function (angular) {
	'use strict';

	angular.module('bz.user')
		.config(config);

	/* @ngInject */
	function config($stateProvider) {
		$stateProvider.state('user', {
			url: '/user',
			templateUrl: 'user/user.html',
			controller: 'userCtrl',
			controllerAs: 'vm'
		});
	}

})(angular);