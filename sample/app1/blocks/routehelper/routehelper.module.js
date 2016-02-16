'use strict';

define([
    'module',
    'angular',
    'angular-ui-router',
    '../logger/logger.module'
], function (module, angular) {

    var routehelper = angular
        .module('blocks.routehelper', [
            'ui.router',
            'blocks.logger'
        ]);

    module.exports = routehelper;
});