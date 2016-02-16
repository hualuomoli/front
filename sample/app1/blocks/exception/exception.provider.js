'use strict';

define([
	'angular',
	'./exception.module',
	'../logger/logger.factory'
], function (angular) {

	angular.module('blocks.exception')
		.provider('exceptionHandler', exceptionHandlerProvider);

	/* @ngInject */
	function exceptionHandlerProvider() {
		/* jshint validthis:true */
		this.config = {
			appErrorPrefix: ''
		};

		this.$get = function () {
			return {
				config: this.config
			};
		};
	}

});