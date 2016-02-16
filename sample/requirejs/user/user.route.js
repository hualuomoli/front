'use strict';

define([
	'angular',
	'angular-ui-router',
	'./user.module',
	'./user.controller',
	'../blocks/routehelper/routehelper.factory'
], function (angular) {

	angular.module('bz.user')
		.run(appRun);

	/* @ngInject */
	function appRun(routehelper) {
		routehelper.configureRoutes(getRoutes());
	}

	function getRoutes() {
		return [{
			state: 'user',
			config: {
				url: '/user',
				templateUrl: 'user/user.html',
				controller: 'userCtrl',
				controllerAs: 'vm'
			}
		}];
	}
});