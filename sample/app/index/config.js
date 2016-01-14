define(['app'], function (app) {

	app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

		$stateProvider
			.state('index', {
				url: '/index',
				views: {
					'': {
						templateUrl: 'index/index.html'
					},
					'navbar@index': {
						templateUrl: 'index/navbar/navbar.html',
						controllerUrl: 'index/navbar/navbarCtrl',
						controller: 'navbarCtrl'
					},
					'sidebar@index': {
						templateUrl: 'index/sidebar/sidebar.html',
						controllerUrl: 'index/sidebar/sidebarCtrl',
						controller: 'sidebarCtrl'
					},
					'page@index': {
						templateUrl: 'index/page/page.html',
						controllerUrl: 'index/page/pageCtrl',
						controller: 'pageCtrl'
					}
				}
			});

	}]);

});