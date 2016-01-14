define(function (require) {
	var app = require('../../app');
	var $ = require('jquery');

	app.controller('mainCtrl', ['$scope', function ($scope) {
		$scope.tabs = {
			"01":{'id':'01','name':'Home','content':'This is Home contnt'},
			"02":{'id':'02','name':'Profile','content':'This is Profile contnt'},
			"03":{'id':'03','name':'Message','content':'This is Message contnt'},
			"04":{'id':'04','name':'Settings','content':'This is Settings contnt'}
		};
		$scope.addTab = function(){
			$scope.tabs['05'] = {'id':'05','name':'Added','content':'This is Added contnt'};
			$scope.activeTab('05');
		};
		$scope.removeTab = function(id){
			console.log('id:' + id);
			delete  $scope.tabs[id];
		};
		$scope.activeTab = function(id){
			$('#tab' + id).click();
		};
		$scope.activeTab('01');
	}]);

});