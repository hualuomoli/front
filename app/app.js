define(function (require, exports, module) {
	var angular = require('angular');
	var asyncLoader = require('angular-async-loader');

	require('angular-ui-router');
	require('jquery');
	require('bs3');

	var app = angular.module('app', ['ui.router']);

	asyncLoader.configure(app);

	module.exports = app;
});