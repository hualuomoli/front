(function (angular) {
	'use strict';

	angular.module('bz.user')
		.controller('userCtrl', userCtrl);

	/* @ngInject */
	function userCtrl($timeout, userService) {
		/* jshint validthis:true */
		var vm = this;
		vm.userList = [];

		$timeout(function () {
			vm.userList = userService.list();
		}, 3000);

	}

})(angular);