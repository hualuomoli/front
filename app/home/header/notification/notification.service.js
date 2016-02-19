(function (angular) {
  'use strict';

  angular.module('bz.home.header.notification')
    .service('headerNotificationService', notificationService);

  /* @ngInject */
  function notificationService() {

    return {
      getAlerts: getAlerts,
      getTasks: getTasks,
      getMessage: getMessage
    };

    function getAlerts() {
      return [{
        "title": "New Comment",
        "time": "4 minutes ago",
        "class": "fa-comment"
      }, {
        "title": "3 New Followers",
        "time": "12 minutes ago",
        "class": "fa-twitter"
      }, {
        "title": "Message Sent",
        "time": "4 minutes ago",
        "class": "fa-envelope"
      }, {
        "title": "New Task",
        "time": "4 minutes ago",
        "class": "fa-tasks"
      }, {
        "title": "Server Rebooted",
        "time": "4 minutes ago",
        "class": "fa-upload"
      }];
    }

    function getTasks() {
      return [{
        "title": "Task 1",
        "content": "40% Complete",
        "value": "40",
        "class": "progress-bar-success"
      }, {
        "title": "Task 2",
        "content": "20% Complete",
        "value": "20",
        "class": "progress-bar-info"
      }, {
        "title": "Task 3",
        "content": "60% Complete",
        "value": "60",
        "class": "progress-bar-warning"
      }, {
        "title": "Task 4",
        "content": "80% Complete",
        "value": "80",
        "class": "progress-bar-danger"
      }];
    }

    function getMessage() {
      return [{
        "title": "John Smith1",
        "time": "Yesterday",
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend..."
      }, {
        "title": "John Smith2",
        "time": "Yesterday",
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend..."
      }, {
        "title": "John Smith3",
        "time": "Yesterday",
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend..."
      }];
    }

  }

})(window.angular);