define(function (require) {
	var app = require('../../app');

	app.controller('navbarCtrl', ['$scope', function ($scope) {
		$scope.nickName = 'Manager';
	}]);

});