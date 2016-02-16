'use strict';

define([
	'angular',
	'./routehelper.module',
	'./routehelper.provider',
	'../logger/logger.factory'
], function (angular) {

	angular.module('blocks.routehelper')
		.factory('routehelper', routehelper);

	/* @ngInject */
	function routehelper($rootScope, logger, routehelperHandler) {
		var routes = [];
		var $stateProvider = routehelperHandler.config.$stateProvider;
		var $urlRouterProvider = routehelperHandler.config.$urlRouterProvider;
		var routePath = routehelperHandler.config.routePath;

		var service = {
			configureRoutes: configureRoutes
		};

		init();

		return service;
		///////////////

		function configureRoutes(routes) {
			routes.forEach(function (route) {
				$stateProvider.state(route.state, route.config);
			});
			$urlRouterProvider.otherwise(routePath);
		}

		function init() {
			handleStateStart();
			handleStateErrors();
			handleStateSuccesses();
			handleStateNotFound();
		}

		function handleStateStart() {
			$rootScope.$on('$stateChangeStart',
				function (event, toState, toParams, fromState, fromParams) {}
			);

		}

		function handleStateErrors() {
			$rootScope.$on('$stateChangeError',
				function (event, toState, toParams, fromState, fromParams) {
					logger.error('change state error.', [fromState, toState]);
					$location.path(routePath);
				}
			);
		}

		function handleStateSuccesses() {
			$rootScope.$on('$stateChangeSuccess',
				function (event, toState, toParams) {
					logger.success('change state success. state = ', toState);
					logger.success('change state success. params = ', toParams);
				}
			);
		}

		function handleStateNotFound() {
			$rootScope.$on('$stateNotFound',
				function (event, toState) {
					logger.warning('state not found. state = ', toState.to);
					logger.warning('state not found. params = ', toState.toParams);
				}
			);
		}
	}

});