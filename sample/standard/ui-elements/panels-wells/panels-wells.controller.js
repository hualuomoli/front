(function (angular) {
	'use strict';

	angular.module('bz.panels-wells')
		.controller('panelsWellsController', panelsWellsController);

	/* @ngInject */
	function panelsWellsController($scope, $timeout) {
		/* jshint validthis:true */
		var panelsWells = this;
		panelsWells.header = '';

		$timeout(function () {
			panelsWells.header = 'Panels And Wells';
		}, 1000);

	}

})(angular);