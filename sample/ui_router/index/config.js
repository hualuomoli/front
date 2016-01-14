define(['app'], function (app) {

	app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

		$stateProvider
			.state('index', {
				url: '/index',
				views: {
					'': {
						templateUrl: 'index/index.html'
					},
					'form1@index': {
						templateUrl: 'index/form1.html',
						// new attribute for ajax load controller
						controllerUrl: 'index/form1Ctrl',
						controller: 'form1Ctrl'
					},
					'form2@index': {
						templateUrl: 'index/form2.html',

						// new attribute for ajax load controller
						controllerUrl: 'index/form2Ctrl',
						controller: 'form2Ctrl'
					}
				}
			});

	}]);

});