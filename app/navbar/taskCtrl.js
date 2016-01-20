define(function (require) {
	var app = require('../app');

	app.controller('taskCtrl', ['$scope', '$stateParams', function ($scope, $stateParams) {

		$scope.name = $stateParams.name;

	}]);

});