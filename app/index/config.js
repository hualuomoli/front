define(['app'], function (app) {

	app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

		////////////
		// Index  //
		////////////

		$stateProvider
			.state('pages', {
				url: '/pages',
				templateUrl: 'index.html',
				controllerUrl: 'index/indexCtrl',
				controller: 'indexCtrl',
				dependencies: ['index/indexService']
			});

		// ///////////
		// // blank //
		// ///////////
		// .state('pages.detail', {
		// 	url: '/{name:.+',
		// 	views: {

		// 		// So this one is targeting the unnamed view within the parent state's template.
		// 		'': {
		// 			templateUrl: function ($stateParams) {
		// 				return 'demo/' + $stateParams.name + '.html'
		// 			}
		// 		}
		// 	}
		// });

	}]);

});