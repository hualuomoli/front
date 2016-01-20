define(['app'], function (app) {

    app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('index', {
                url: '/home',
                views: {
                    '': {
                        templateUrl: 'detail/dashboard.html'
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
                url: '/detail/{module:.*}/{name:.+}',
                views: {
                    '': {
                        templateUrl: function ($stateParams) {
                            var module = $stateParams.module;
                            if (module) {
                                return 'detail/' + module + '/' + $stateParams.name + '.html';
                            }
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