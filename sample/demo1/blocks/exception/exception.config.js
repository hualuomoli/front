(function (angular) {
    'use strict';

    angular.module('blocks.exception')
        .config(config);

    /* @ngInject */
    function config($provide) {
        // add prefix to log message
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

})(angular);