(function () {
  'use strict';

  angular.module('app')
    .controller('TypeaheadDemoCtrl', ['$scope', '$http', function ($scope, $http) {
      $scope.selected = undefined;
      $scope.states = [{
        "opcode": "dashboard",
        "name": "面板"
      }, {
        "opcode": "calendar",
        "name": "日历"
      }, {
        "opcode": "application",
        "name": "应用"
      }]

    }])

})();