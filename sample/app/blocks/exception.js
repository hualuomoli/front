(function () {
    'use strict';

    angular.module('blocks.exception', ['blocks.logger'])
        .provider('exceptionHandler', exceptionHandlerProvider)
        .config(config);

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
        var appErrorPrefix = exceptionHandler.config.appErrorPrefix;
        return function (exception, cause) {

            $delegate(exception, cause);

            var errorData = {
                exception: exception,
                cause: cause
            };
            exception.message = appErrorPrefix + exception.message;
            logger.error(exception.message, errorData);
        };
    }

})();