(function (angular) {
	'use strict';

	angular.module('blocks.routehelper')
		.factory('routehelper', routehelper);

	/* @ngInject */
	function routehelper($rootScope, logger) {

		var service = {
			'init': init
		};

		return service;
		///////////////

		function init() {
			stateChangeError();
			stateChangeSuccess();
			stateNotFound();
		}

		function stateChangeError() {
			$rootScope.$on('$stateChangeError',
				function (event, toState, toParams, fromState, fromParams) {
					logger.error('change state error.', [fromState, toState]);
					$location.path(routePath);
				}
			);
		}

		function stateChangeSuccess() {
			$rootScope.$on('$stateChangeSuccess',
				function (event, toState, toParams, fromState, fromParams) {
					logger.success('change state success. state = ', toState);
				}
			);
		}

		function stateNotFound() {
			$rootScope.$on('$stateNotFound',
				function (event, toState, fromState, fromParams) {
					logger.warning('state not found. state = ', toState.to);
					logger.warning('state not found. params = ', toState.toParams);
				}
			);
		}
	}
})(angular);