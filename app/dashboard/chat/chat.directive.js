(function (angular) {
	'use strict';

	angular.module('bz.dashboard.chat')
		.directive('bzDashboardChat', chat);

	function chat() {
		return {
			templateUrl: 'dashboard/chat/chat.html',
			restrict: 'AE',
			replace: true,
		}
	}

})(angular);