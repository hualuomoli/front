(function () {
	angular.module('bz.user')
		.run(appRun);

	/* @ngInject */
	function appRun(routehelper) {
		routehelper.configureRoutes(getRoutes());
	}

	function getRoutes() {
		return [{
			state: 'user',
			config: {
				url: '/user',
				templateUrl: 'user/user.html',
				controller: 'userCtrl',
				controllerAs: 'vm'
			}
		}];
	}

})();