(function (angular) {
	'use strict';

	angular.module('bz.dashboard')
		.controller('dashboardController', dashboardController);

	/* @ngInject */
	function dashboardController($scope, $timeout) {
		/* jshint validthis:true */
		var dashboard = this;
		dashboard.header = '';

		$timeout(function () {
			dashboard.header = 'Dashboard';
		}, 1000);

	}

})(angular);