define([
	'angular',
	'app.module',
	'./core/core.config',
	'route'
], function (angular) {

	angular.element(document).ready(function () {
		angular.bootstrap(document, ['app']);
		angular.element(document).find('html').addClass('ng-app');
	});

});