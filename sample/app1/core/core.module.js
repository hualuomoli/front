'use strict';

define([
	'module',
	'angular',
	'angular-ui-router',
	'../blocks/logger/logger.module',
	'../blocks/exception/exception.module',
	'../blocks/routehelper/routehelper.module'
], function (module, angular) {

	var app = angular.module('app.core', [
		/*
		 * Angular modules
		 */
		'ui.router',
		/*
		 * Our reusable cross app code modules
		 */
		'blocks.exception',
		'blocks.logger',
		'blocks.routehelper'
		/*
		 * 3rd Party modules
		 */
	]);

	module.exports = app;
});