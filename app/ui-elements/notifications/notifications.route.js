(function (angular) {
  'use strict';

  angular.module('bz.notifications')
    .config(config);

  /* @ngInject */
  function config($stateProvider) {
    $stateProvider.state('home.notifications', {
      url: '/notifications',
      templateUrl: 'ui-elements/notifications/notifications.html',
      controller: 'notificationsController',
      controllerAs: 'notifications'
    });
  }

})(window.angular);