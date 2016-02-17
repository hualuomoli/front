(function (angular) {
	'use strict';

	angular.module('bz.icons')
		.controller('iconsController', iconsController);

	/* @ngInject */
	function iconsController($scope, $timeout) {
		/* jshint validthis:true */
		var icons = this;
		icons.header = '';

		$timeout(function () {
			icons.header = 'Icons';
		}, 1000);

	}

})(angular);