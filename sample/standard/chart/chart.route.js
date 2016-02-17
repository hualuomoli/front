(function (angular) {
	'use strict';

	angular.module('bz.chart')
		.config(config);

	/* @ngInject */
	function config($stateProvider) {
		$stateProvider.state('home.chart', {
			url: '/chart',
			templateUrl: 'chart/chart.html',
			controller: 'chartController',
			controllerAs: 'chart'
		});
	}

})(angular);