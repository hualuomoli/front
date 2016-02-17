(function (angular) {
	'use strict';

	angular.module('bz.table')
		.controller('tableController', tableController);

	/* @ngInject */
	function tableController($scope, $timeout) {
		/* jshint validthis:true */
		var table = this;
		table.header = '';

		$timeout(function () {
			table.header = 'Tables';
		}, 1000);

	}

})(angular);