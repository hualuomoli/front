(function (angular) {
    'use strict';

    angular.module('app.core')
        .config(config);

    /* @ngInject */
    function config($stateProvider, $urlRouterProvider, exceptionHandlerProvider) {

        $urlRouterProvider.otherwise('/home');

        // Configure the common exception handler
        exceptionHandlerProvider.config.appErrorPrefix = '[App Error] ';
    }
})(angular);