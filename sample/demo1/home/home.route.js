(function (angular) {
	'use strict';

	angular.module('bz.home')
		.config(config);

	/* @ngInject */
	function config($stateProvider) {
		$stateProvider.state('home', {
			url: '/home',
			templateUrl: 'home/home.html',
			controller: 'homeCtrl',
			controllerAs: 'vm'
		});

	}

})(angular);