(function (angular) {
	'use strict';

	angular.module('bz.buttons')
		.controller('buttonsController', buttonsController);

	/* @ngInject */
	function buttonsController($scope, $timeout) {
		/* jshint validthis:true */
		var buttons = this;
		buttons.header = '';

		$timeout(function () {
			buttons.header = 'Buttons';
		}, 1000);

	}

})(angular);