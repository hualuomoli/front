'use strict';

define([
	'angular',
	'./user.module',
], function (angular) {

	angular.module('bz.user')
		.service('userService', userService);

	/* @ngInject */
	function userService() {
		return {
			list: list
		};

		function list() {
			return [{
				name: 'user-1',
				mail: 'user-1@email.com'
			}, {
				name: 'user-2',
				mail: 'user-2@email.com'
			}];
		}

	}

});