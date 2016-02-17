(function (angular) {
	'use strict';

	angular.module('bz.icons')
		.config(config);

	/* @ngInject */
	function config($stateProvider) {
		$stateProvider.state('home.icons', {
			url: '/icons',
			templateUrl: 'ui-elements/icons/icons.html',
			controller: 'iconsController',
			controllerAs: 'icons'
		});
	}

})(angular);