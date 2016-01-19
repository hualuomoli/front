define(['app'], function (app) {

    app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('index', {
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
            })
            // home
            .state('detail', {
                url: '/detail/:name',
                views: {
                    '': {
                        templateUrl: function ($stateParams) {
                            return 'detail/' + $stateParams.name + '.html';
                        }
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