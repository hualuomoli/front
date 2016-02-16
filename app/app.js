(function () {
    'use strict';

    angular.module('app', [
        'app.core',
        'bz.home',
        'bz.user'
    ]);

    angular.element(document).ready(function () {
        angular.bootstrap(document, ['app']);
        angular.element(document).find('html').addClass('ng-app');
    });

})();