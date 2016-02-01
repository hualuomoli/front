define(['module', 'angular', 'angular-async-loader', 'angular-ui-router'], function (module, angular, asyncLoader) {

	var app = angular.module('app', ['ui.router']);

	asyncLoader.configure(app);

	module.exports = app;
});