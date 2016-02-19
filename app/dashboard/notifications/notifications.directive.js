(function (angular) {
  'use strict';

  angular.module('bz.dashboard.notifications')
    .directive('bzDashboardNotifications', notifications);

  function notifications() {
    return {
      templateUrl: 'dashboard/notifications/notifications.html',
      restrict: 'AE',
      replace: true,
    };
  }

})(window.angular);