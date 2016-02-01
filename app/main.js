require.config({
    baseUrl: '/app',
    paths: {
        'angular': '../assets/angular/angular.min',
        'angular-ui-router': '../assets/angular-ui-router/release/angular-ui-router.min',
        'angular-async-loader': '../assets/angular-async-loader/dist/angular-async-loader.min',
        'jquery': '../assets/jquery/dist/jquery.min',
        'bootstrap': '../assets/bootstrap/dist/js/bootstrap.min',
        'metisMenu': '../assets/metisMenu/dist/metisMenu.min'
    },
    shim: {
        'angular': {
            'exports': 'angular'
        },
        'angular-ui-router': {
            'deps': ['angular']
        },
        'bootstrap': {
            'deps': ['jquery']
        },
        'metisMenu': {
            'deps': ['jquery']
        }
    },
    deps: ['app']
});

require(['angular', 'routes', 'jquery', 'bootstrap'], function (angular) {
    angular.element(document).ready(function () {
        angular.bootstrap(document, ['app']);
        angular.element(document).find('html').addClass('ng-app');
    });
});