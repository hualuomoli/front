define(function (require) {
	var app = require('../app');

	app.controller('alertCtrl', ['$scope', '$stateParams', function ($scope, $stateParams) {

		$scope.name = $stateParams.name;

	}]);

});