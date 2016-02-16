'use strict';

define([
	'module',
	'angular',
	'../logger/logger.module'
], function (module, angular) {

	var exception = angular
		.module('blocks.exception', [
			'blocks.logger'
		]);

	module.exports = exception;
});