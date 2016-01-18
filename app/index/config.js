define(['app'], function (app) {

	app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

		////////////
		// Index  //
		////////////

		$stateProvider
			.state('index', {
				url: '/index',
				views: {

					//////////
					// page //
					//////////
					'': {
						templateUrl: 'index/page.html',
						controllerUrl: 'index/pageCtrl',
						controller: 'pageCtrl'
					},

					////////////
					// header //
					////////////
					'header': {
						templateUrl: 'index/header.html'
					},

					////////////
					// navbar //
					////////////
					'navbar': {
						templateUrl: 'index/navbar.html',
						controllerUrl: 'index/navbarCtrl',
						controller: 'navbarCtrl'
					},

					/////////////
					// sidebar //
					/////////////
					'sidebar': {
						templateUrl: 'index/sidebar.html',
						controllerUrl: 'index/sidebarCtrl',
						controller: 'sidebarCtrl'
					}
				}
			});

	}]);

});