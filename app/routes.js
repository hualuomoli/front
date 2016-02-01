define(['app', 'config'], function (app) {

	app.run(['$state', '$stateParams', '$rootScope', function ($state, $stateParams, $rootScope) {
		// $rootScope.dev = true;
		$rootScope.$state = $state;
		$rootScope.$stateParams = $stateParams;
	}]);

	app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/home');
	}]);
});