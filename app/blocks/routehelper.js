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
            handleStateErrors();
            handleStateSuccesses();
            handleStateNotFound();
        }

        function handleStateErrors() {
            $rootScope.$on('$stateChangeError',
                function (event, toState, toParams, fromState, fromParams) {
                    logger.error('change state error.', [fromState, toState]);
                    $location.path(routePath);
                }
            );
        }

        function handleStateSuccesses() {
            $rootScope.$on('$stateChangeSuccess',
                function (event, toState, toParams, fromState, fromParams) {
                    logger.success('change state success.', toState);
                }
            );
        }

        function handleStateNotFound() {
            $rootScope.$on('$stateNotFound',
                function (event, toState, fromState, fromParams) {
                    logger.warning('state not found. state = ', toState.to);
                    logger.warning('state not found. params = ', toState.toParams);
                }
            );
        }
    }
})();