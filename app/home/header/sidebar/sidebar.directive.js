(function (angular) {
	'use strict';

	angular.module('bz.home.header.sidebar')
		.directive('bzHeaderSidebar', sidebar);

	function sidebar() {
		return {
			templateUrl: 'home/header/sidebar/sidebar.html',
			controller: 'headerSidebarController',
			controllerAs: 'sidebar',
			restrict: 'AE',
			replace: true
		}
	}

})(angular);