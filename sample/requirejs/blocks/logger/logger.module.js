'use strict';

define([
	'module',
	'angular'
], function (module, angular) {

	var logger = angular
		.module('blocks.logger', []);

	module.exports = logger;
});