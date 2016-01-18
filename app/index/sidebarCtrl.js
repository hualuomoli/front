define(function (require) {
	var app = require('../app');

	app.controller('sidebarCtrl', ['$scope', function ($scope) {
		var url = '';
		$scope.datas = [{
			'href': url + 'index.html',
			'icon': 'fa-dashboard',
			'name': 'Dashboard',
			'leaf': true
		}, {
			'href': url + 'charts.html',
			'icon': 'fa-bar-chart-o',
			'name': 'Charts',
			'leaf': true
		}, {
			'href': url + 'tables.html',
			'icon': 'fa-table',
			'name': 'Tables',
			'leaf': true
		}, {
			'href': url + 'forms.html',
			'icon': 'fa-edit',
			'name': 'Forms',
			'leaf': true
		}, {
			'href': url + 'bootstrap-elements.html',
			'icon': 'fa-desktop',
			'name': 'Bootstrap Elements',
			'leaf': true
		}, {
			'href': url + 'bootstrap-grid.html',
			'icon': 'fa-wrench',
			'name': 'Bootstrap Grid',
			'leaf': true
		}, {
			'href': '',
			'icon': 'fa-arrows-v',
			'name': 'Dropdown',
			'leaf': false,
			'id': '01',
			children: [{
				'href': '#',
				'icon': '',
				'name': 'Dropdown Item'
			}, {
				'href': '#',
				'icon': '',
				'name': 'Dropdown Item'
			}, {
				'href': '#',
				'icon': '',
				'name': 'Dropdown Item'
			}, {
				'href': '#',
				'icon': '',
				'name': 'Dropdown Item'
			}, {
				'href': '#',
				'icon': '',
				'name': 'Dropdown Item'
			}]
		}, {
			'href': '',
			'icon': 'fa-arrows-v',
			'name': 'System',
			'leaf': false,
			'id': '02',
			children: [{
				'href': 'http://www.baidu.com',
				'icon': '',
				'name': 'Baidu'
			}, {
				'href': 'http://www.github.com/hualuomoli',
				'icon': '',
				'name': 'Concat US'
			}]
		}, {
			'href': url + 'blank-page.html',
			'icon': 'fa-file',
			'name': 'Blank Page',
			'leaf': true
		}, {
			'href': url + 'index-rtl.html',
			'icon': 'fa-dashboard',
			'name': 'RTL Dashboard',
			'leaf': true
		}];
	}]);

});