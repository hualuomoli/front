(function (angular) {
	'use strict';

	angular.module('app.core')
		.run(appRun)
		.config(config);

	/* @ngInject */
	function config($stateProvider, $urlRouterProvider, exceptionHandlerProvider) {

		$urlRouterProvider.otherwise('/home/dashboard');

		// Configure the common exception handler
		exceptionHandlerProvider.config.appErrorPrefix = '[App Error] ';
	}

	/* @ngInject */
	function appRun(routehelper){
		routehelper.init();
	}

})(angular);