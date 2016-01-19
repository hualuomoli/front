define(function (require, exports, module) {
	var angular = require('angular');
	var asyncLoader = require('angular-async-loader');

	require('angular-ui-router');

	// jquery bootstrap
	require('jquery');
	require('bootstrap');

	var app = angular.module('app', ['ui.router']);

	asyncLoader.configure(app);

	module.exports = app;
});