'use strict';

define([
	'angular',
	'angular-ui-router',
	'./home.module',
	'./home.controller',
	'../blocks/routehelper/routehelper.factory'
], function (angular) {

	angular.module('bz.home')
		.run(appRun);

	/* @ngInject */
	function appRun(routehelper) {
		routehelper.configureRoutes(getRoutes());
	}

	function getRoutes() {
		return [{
			state: 'home',
			config: {
				url: '/home',
				templateUrl: 'home/home.html',
				controller: 'homeCtrl',
				controllerAs: 'vm'
			}
		}];
	}
});