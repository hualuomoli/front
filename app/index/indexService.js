define(function (require) {
	var app = require('../app');

	app.controller('indexService', ['$http', function ($http) {

		var service = {};

		var menuList = $http.get('index/menu.json').then(function (resp) {
			return resp.data;
		});

		var user_messages = $http.get('index/user-messages.json').then(function (resp) {
			return resp.data;
		});
		var user_tasks = $http.get('index/user-tasks.json').then(function (resp) {
			return resp.data;
		});
		var user_alerts = $http.get('index/user-alerts.json').then(function (resp) {
			return resp.data;
		});

		var user = {
			'messages': user_messages,
			'tasks': user_tasks,
			'alerts': user_alerts
		};

		service.allMenu = function () {
			return menuList;
		};

		service.getUser = function () {
			return user;
		}

		return service;

	}]);

});