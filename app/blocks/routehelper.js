(function () {
    'use strict';

    angular.module('blocks.routehelper', [
            'ui.router',
            'blocks.logger'
        ])
        .factory('routehelper', routehelper)
        .provider('routehelperHandler', routehelperHandlerProvider);

    /* @ngInject */
    function routehelperHandlerProvider() {
        /* jshint validthis:true */
        this.config = {
            // These are the properties we need to set
            // $stateProvider: undefined
            // $urlRouterProvider: undefined
            'routePath': '/'
        };

        this.$get = function () {
            return {
                config: this.config
            };
        };
    }

    /* @ngInject */
    function routehelper($rootScope, logger, routehelperHandler) {
        var routes = [];
        var $stateProvider = routehelperHandler.config.$stateProvider;
        var $urlRouterProvider = routehelperHandler.config.$urlRouterProvider;
        var routePath = routehelperHandler.config.routePath;

        var service = {
            configureRoutes: configureRoutes
        };

        init();

        return service;
        ///////////////

        function configureRoutes(routes) {
            routes.forEach(function (route) {
                $stateProvider.state(route.state, route.config);
            });
            $urlRouterProvider.otherwise(routePath);
        }

        function init() {
            handleRoutingErrors();
            handleRoutingSuccesses();
        }

        function handleRoutingErrors() {
            $rootScope.$on('$routeChangeError',
                function (event, current, previous, rejection) {
                    logger.warning('change route error.', [previous.$$route, current.$$route]);
                    $location.path(routePath);
                }
            );
        }

        function handleRoutingSuccesses() {
            $rootScope.$on('$routeChangeSuccess',
                function (event, current, previous) {
                    logger.success('change route success.', current.$$route);
                }
            );
        }
    }
})();