define([
	'angular',
	'./core/core.module',
	'./user/user.module',
	'./home/home.module'
], function (angular) {
	angular.module('app', [
		'app.core',
		'bz.home',
		'bz.user'
	]);
});