(function (angular) {
	'use strict';

	angular.module('bz.grid')
		.controller('gridController', gridController);

	/* @ngInject */
	function gridController($scope, $timeout) {
		/* jshint validthis:true */
		var grid = this;
		grid.header = '';

		$timeout(function () {
			grid.header = 'Grid';
		}, 1000);

	}

})(angular);