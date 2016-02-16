'use strict';

define([
	'angular',
	'./routehelper.module',
	'../logger/logger.factory'
], function (angular) {

	angular.module('blocks.routehelper')
		.provider('routehelperHandler', routehelperHandlerProvider);

	/* @ngInject */
	function routehelperHandlerProvider() {
		/* jshint validthis:true */
		this.config = {
			// These are the properties we need to set
			// $stateProvider: undefined
			// $urlRouterProvider: undefined
			'routePath': '/'
		};

		this.$get = function () {
			return {
				config: this.config
			};
		};
	}

});