define(function (require) {
	var app = require('../app');

	app.controller('form2Ctrl', ['$scope', function ($scope) {
		$scope.datas = ['CSS', 'JS', 'HTML', 'Angular', 'Requirejs', 'jquery', 'bootstrap', 'node', 'express'];
	}]);
});