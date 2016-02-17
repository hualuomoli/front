(function (angular) {
	'use strict';

	angular.module('bz.typography')
		.config(config);

	/* @ngInject */
	function config($stateProvider) {
		$stateProvider.state('home.typography', {
			url: '/typography',
			templateUrl: 'ui-elements/typography/typography.html',
			controller: 'typographyController',
			controllerAs: 'typography'
		});
	}

})(angular);