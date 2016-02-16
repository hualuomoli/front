'use strict';

define([
	'angular',
	'./home.module'
], function (angular) {

	angular.module('bz.home')
		.controller('homeCtrl', homeCtrl);

	/* @ngInject */
	function homeCtrl($timeout) {
		/* jshint validthis:true */
		var vm = this;
		vm.name = 'Page';

		$timeout(function () {
			vm.name = 'Home';
		}, 2000);

	}

});