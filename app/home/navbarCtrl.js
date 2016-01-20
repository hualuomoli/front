define(function (require) {
	var app = require('../app');

	app.controller('navbarCtrl', ['$scope', '$http', function ($scope, $http) {

		var path = 'home/data/navbar.json';

		$http.get(path).then(function (resp) {
			$scope.data = resp.data;
		});

	}]);

});