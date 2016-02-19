(function (angular) {
  'use strict';

  angular.module('bz.home.header.notification')
    .controller('headerNotificationController', notificationController);

  /* @ngInject */
  function notificationController($timeout, headerNotificationService, logger) {
    /* jshint validthis:true */
    var notification = this;

    notification.alerts = {};
    notification.messages = {};
    notification.tasks = {};

    $timeout(function () {
      notification.alerts = headerNotificationService.getAlerts();
      notification.tasks = headerNotificationService.getTasks();
      notification.messages = headerNotificationService.getMessage();

      logger.log('load notification data');

    }, 1000);

  }

})(window.angular);