define(function (require) {
	var app = require('./app');

	require('./config');

	app.run(['$state', '$stateParams', '$rootScope', function ($state, $stateParams, $rootScope) {
		$rootScope.$state = $state;
		$rootScope.$stateParams = $stateParams;
	}]);

	app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/index');

	}]);
});