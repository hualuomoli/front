(function () {
  'use strict';

  angular.module('app')
    .provider('appHandler', appHandlerProvider);

  function appHandlerProvider() {
    /* jshint validthis:true */
    this.config = {
      route: {
        root: {
          state: 'app',
          url: '/app',
          templateUrl: 'tpl/app.html'
        },
        dashboard: {
          state: 'app.dashboard',
          url: '/dashboard',
          templateUrl: 'tpl/dashboard/dashboard.html'
        }
      }

    };

    this.$get = function () {
      return {
        config: this.config
      };
    };
  }

})();