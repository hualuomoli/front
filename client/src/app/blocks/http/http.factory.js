(function () {
  'use strict';

  angular.module('blocks.http')
    .factory('http', http);

  /* @ngInject */
  function http($http, path, logger, httpHandler) {

    var baseUrl = httpHandler.config.baseUrl;

    return {
      get: get,
      post: post,
      call: call
    }

    // http get
    function get(uri, params) {

      var url = path.join(baseUrl, uri);
      var data = parseParams(params);

      call(url, data, 'get');

    }

    // http post
    function post(uri, params) {

      var url = path.join(baseUrl, uri);

      var data = parseParams(params);

      call(url, data, 'post');

    }

    // call
    function call(url, data, methodName) {
      return $http({
        method: methodName,
        url: url,
        data: data,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });
    }

    function parseParams(params) {
      var data;
      if (!params) {
        data = '';
      } else if (typeof params == 'string') {
        data = params;
      } else if (typeof params == 'object') {
        data = $.param(params);
      } else {
        throw new Error('con\'t parse ' + (typeof params));
      }
      return data;
    }



  }

})();