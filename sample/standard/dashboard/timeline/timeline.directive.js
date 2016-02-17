(function (angular) {
	'use strict';

	angular.module('bz.dashboard.timeline')
		.directive('bzDashboardTimeline', timeline);

	function timeline() {
		return {
			templateUrl: 'dashboard/timeline/timeline.html',
			restrict: 'AE',
			replace: true
		}
	}

})(angular);