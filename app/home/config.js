define(['app'], function (app) {

    app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'home/home.html',
                // new attribute for ajax load controller
                controllerUrl: 'home/homeCtrl',
                controller: 'homeCtrl'
            });
    }]);

});