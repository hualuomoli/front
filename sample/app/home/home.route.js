(function () {
	angular.module('bz.home')
		.run(appRun);

	/* @ngInject */
	function appRun(routehelper) {
		routehelper.configureRoutes(getRoutes());
	}

	function getRoutes() {
		return [{
			state: 'home',
			config: {
				url: '/home',
				templateUrl: 'home/home.html',
				controller: 'homeCtrl',
				controllerAs: 'vm'
			}
		}];
	}

})();