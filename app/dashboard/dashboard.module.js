(function (angular) {
  'use strict';

  angular.module('bz.dashboard', [
    'bz.dashboard.chat',
    'bz.dashboard.notifications',
    'bz.dashboard.timeline'
  ]);

})(window.angular);