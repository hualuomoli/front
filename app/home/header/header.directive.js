(function (angular) {
  'use strict';

  angular.module('bz.home.header')
    .directive('bzHeader', header);

  function header() {
    return {
      templateUrl: 'home/header/header.html',
      restrict: 'AE',
      replace: true
    };
  }

})(window.angular);