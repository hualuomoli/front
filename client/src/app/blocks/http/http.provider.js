(function () {
  'use strict';

  angular.module('blocks.http')
    .provider('httpHandler', httpHandleProvider);

  /** @ngInject */
  function httpHandleProvider() {
    /* jshint validthis:true */
    this.config = {
      baseUrl: 'http://localhost:3000' // baseUrl
    }

    this.$get = function () {
      return {
        config: this.config
      }
    }

  }

})();