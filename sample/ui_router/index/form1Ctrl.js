define(function (require) {
	var app = require('../app');

	app.controller('form1Ctrl', ['$scope', function ($scope) {
		$scope.name = 'form1';
	}]);
});