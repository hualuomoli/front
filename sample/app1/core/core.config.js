'use strict';

define([
	'angular',
	'./core.module',

	// logger
	'../blocks/logger/logger.module',
	'../blocks/logger/logger.factory',
	// exception
	'../blocks/exception/exception.module',
	'../blocks/exception/exception.provider',
	'../blocks/exception/exception.config',
	// routehelper
	'../blocks/routehelper/routehelper.module',
	'../blocks/routehelper/routehelper.provider',
	'../blocks/routehelper/routehelper.factory'

], function (angular) {

	angular.module('app.core')
		.config(config);

	/* @ngInject */
	function config($stateProvider, $urlRouterProvider, routehelperHandlerProvider, exceptionHandlerProvider) {

		// Configure the common route provider
		routehelperHandlerProvider.config.$stateProvider = $stateProvider;
		routehelperHandlerProvider.config.$urlRouterProvider = $urlRouterProvider;
		routehelperHandlerProvider.config.routePath = '/home';

		// Configure the common exception handler
		exceptionHandlerProvider.config.appErrorPrefix = '[Front Error] ';
	}

});