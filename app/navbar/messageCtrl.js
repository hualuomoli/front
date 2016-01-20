define(function (require) {
	var app = require('../app');

	app.controller('messageCtrl', ['$scope', '$stateParams', function ($scope, $stateParams) {

		console.log($stateParams.name);
		$scope.name = $stateParams.name;

	}]);

});