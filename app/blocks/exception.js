(function () {
    'use strict';

    angular.module('blocks.exception', ['blocks.logger'])
        .factory('exception', exception)
        .provider('exceptionHandler', exceptionHandlerProvider)
        .config(config);

    /* @ngInject */
    function exception(logger) {
        var service = {
            catcher: catcher
        };
        return service;

        function catcher(message) {
            return function (reason) {
                logger.error(message, reason);
            };
        }
    }

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

    /* @ngInject */
    function config($provide) {
        $provide.decorator('$exceptionHandler', extendExceptionHandler);
    }

    /* @ngInject */
    function extendExceptionHandler($delegate, exceptionHandler, logger) {
        return function (exception, cause) {
            var appErrorPrefix = exceptionHandler.config.appErrorPrefix;
            var errorData = {
                exception: exception,
                cause: cause
            };
            exception.message = appErrorPrefix + exception.message;
            $delegate(exception, cause);
            logger.error(exception.message, errorData);
        };
    }

})();