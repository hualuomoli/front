(function (angular) {
  'use strict';

  angular.module('app', [
    'app.core',
    'chart.js',

    'bz.home',
    'bz.home.header',
    'bz.home.header.notification',
    'bz.home.header.sidebar',

    'bz.dashboard',
    'bz.chart',
    'bz.table',
    'bz.form',
    'bz.buttons',
    'bz.grid',
    'bz.icons',
    'bz.notifications',
    'bz.panels-wells',
    'bz.typography',

    'bz.login'
  ]);

  angular.element(document).ready(function () {
    angular.bootstrap(document, ['app']);
    angular.element(document).find('html').addClass('ng-app');
  });

})(window.angular);