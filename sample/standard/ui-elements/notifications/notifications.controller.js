(function (angular) {
	'use strict';

	angular.module('bz.notifications')
		.controller('notificationsController', notificationsController);

	/* @ngInject */
	function notificationsController($scope, $timeout) {
		/* jshint validthis:true */
		var notifications = this;
		notifications.header = '';

		$timeout(function () {
			notifications.header = 'Notifications';
		}, 1000);

	}

})(angular);