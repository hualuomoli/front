(function (angular) {
	'use strict';

	angular.module('bz.home.header.sidebar.search')
		.directive('bzHeaderSidebarSearch', search);

	function search() {
		return {
			templateUrl: 'home/header/sidebar/search/search.html',
			scope: {},
			restrict: 'E',
			replace: true,
		}
	}
})(angular);