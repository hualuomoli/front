define(['app'], function (app) {

    app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('home', {
                url: '/home',
                views: {
                    '': {
                        templateUrl: 'home/main.html'
                    },
                    'navbar@': {
                        templateUrl: 'home/navbar.html'
                    },
                    'sidebar@': {
                        templateUrl: 'home/sidebar.html',
                        controllerUrl: 'home/sidebarCtrl',
                        controller: 'sidebarCtrl',
                        dependencies: []
                    }
                }
            });
    }]);

});