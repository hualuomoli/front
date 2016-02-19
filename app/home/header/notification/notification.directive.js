(function (angular) {
  'use strict';

  angular.module('bz.home.header.notification')
    .directive('bzHeaderNotification', notification);

  function notification() {
    return {
      templateUrl: 'home/header/notification/notification.html',
      controller: 'headerNotificationController',
      controllerAs: 'notification',
      restrict: 'AE',
      replace: true
    };
  }
})(window.angular);