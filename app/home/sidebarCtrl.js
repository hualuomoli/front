define(function (require) {
	var app = require('../app');

	var $ = require('jquery');
	require('metisMenu');
	app.controller('sidebarCtrl', ['$scope', function ($scope) {
		$('#side-menu').metisMenu();

	}]);
});