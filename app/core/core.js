(function () {
    'use strict';

    angular.module('app.core', [
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
        ])
        .config(config);

    /* @ngInject */
    function config($stateProvider, $urlRouterProvider, routehelperHandlerProvider, exceptionHandlerProvider) {

        // Configure the common route provider
        routehelperHandlerProvider.config.$stateProvider = $stateProvider;
        routehelperHandlerProvider.config.$urlRouterProvider = $urlRouterProvider;
        routehelperHandlerProvider.config.routePath = '/home';

        // Configure the common exception handler
        exceptionHandlerProvider.config.appErrorPrefix = '[App Error] ';
    }
})();