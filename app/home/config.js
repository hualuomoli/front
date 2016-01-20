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
                        templateUrl: 'home/navbar.html',
                        controllerUrl: 'home/navbarCtrl',
                        controller: 'navbarCtrl',
                        dependencies: []
                    },
                    'sidebar@': {
                        templateUrl: 'home/sidebar.html',
                        controllerUrl: 'home/sidebarCtrl',
                        controller: 'sidebarCtrl',
                        dependencies: []
                    }
                }
            })
            // navbar -> message
            .state('message', {
                url: '/message/{name:.+}',
                views: {
                    '': {
                        templateUrl: 'navbar/message.html',
                        controllerUrl: 'navbar/messageCtrl',
                        controller: 'messageCtrl',
                        dependencies: []
                    },
                    'navbar@': {
                        templateUrl: 'home/navbar.html',
                        controllerUrl: 'home/navbarCtrl',
                        controller: 'navbarCtrl',
                        dependencies: []
                    },
                    'sidebar@': {
                        templateUrl: 'home/sidebar.html',
                        controllerUrl: 'home/sidebarCtrl',
                        controller: 'sidebarCtrl',
                        dependencies: []
                    }
                }
            })
            // navbar -> task
            .state('task', {
                url: '/task/{name:.+}',
                views: {
                    '': {
                        templateUrl: 'navbar/task.html',
                        controllerUrl: 'navbar/taskCtrl',
                        controller: 'taskCtrl',
                        dependencies: []
                    },
                    'navbar@': {
                        templateUrl: 'home/navbar.html',
                        controllerUrl: 'home/navbarCtrl',
                        controller: 'navbarCtrl',
                        dependencies: []
                    },
                    'sidebar@': {
                        templateUrl: 'home/sidebar.html',
                        controllerUrl: 'home/sidebarCtrl',
                        controller: 'sidebarCtrl',
                        dependencies: []
                    }
                }
            })
            // navbar -> alert
            .state('alert', {
                url: '/alert/{name:.+}',
                views: {
                    '': {
                        templateUrl: 'navbar/alert.html',
                        controllerUrl: 'navbar/alertCtrl',
                        controller: 'alertCtrl',
                        dependencies: []
                    },
                    'navbar@': {
                        templateUrl: 'home/navbar.html',
                        controllerUrl: 'home/navbarCtrl',
                        controller: 'navbarCtrl',
                        dependencies: []
                    },
                    'sidebar@': {
                        templateUrl: 'home/sidebar.html',
                        controllerUrl: 'home/sidebarCtrl',
                        controller: 'sidebarCtrl',
                        dependencies: []
                    }
                }
            })
            // detail
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
                        templateUrl: 'home/navbar.html',
                        controllerUrl: 'home/navbarCtrl',
                        controller: 'navbarCtrl',
                        dependencies: []
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