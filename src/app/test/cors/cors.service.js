(function () {
  'use strict';

  angular.module('app')
    .service('testCorsService', testCorsService);

  /** @ngInject */
  function testCorsService($timeout, testCors, http) {
    var service = {};
    var postUrls = [
      'http://localhost:80/web/login',
      'http://127.0.0.1:80/web/login',
      'http://192.168.1.136/web/login'
    ];

    var getUrls = [
      'http://localhost:80/web/logout',
      'http://127.0.0.1:80/web/logout',
      'http://192.168.1.136/web/logout'
    ];

    var params = {
      username: 'admin',
      password: 'admin'
    };

    service.ajaxCross = ajaxCross;
    service.ngCross = ngCross;
    service.httpCross = httpCross;

    service.security = security;

    return service;

    function ajaxCross() {
      testCors.ajaxGet(getUrls[0]);
      testCors.ajaxGet(getUrls[1]);
      testCors.ajaxGet(getUrls[2]);

      testCors.ajaxPost(postUrls[0], params);
      testCors.ajaxPost(postUrls[1], params);
      testCors.ajaxPost(postUrls[2], params);
    }

    function ngCross() {
      testCors.ngGet(getUrls[0]);
      testCors.ngGet(getUrls[1]);
      testCors.ngGet(getUrls[2]);

      testCors.ngPost(postUrls[0], params);
      testCors.ngPost(postUrls[1], params);
      testCors.ngPost(postUrls[2], params);
    }

    function httpCross() {
      testCors.httpGet(getUrls[0]);
      testCors.httpGet(getUrls[1]);
      testCors.httpGet(getUrls[2]);

      testCors.httpPost(postUrls[0], params);
      testCors.httpPost(postUrls[1], params);
      testCors.httpPost(postUrls[2], params);
    }

    function security() {
      var url = 'http://localhost:80/web/auth/user/admin';
      var token;
      // login user invalide
      http.post(postUrls[0], {})
        .success(function (data, status, config, headers) {
          console.log(data);
        })
        .error(function (data) {
          console.log(data);
        });

      // login
      $timeout(function () {
        http.post(postUrls[0], params)
          .success(function (data, status, config, headers) {
            console.log(data);
          });
      }, 100);
      // get data
      $timeout(function () {
        http.get(url)
          .success(function (data) {
            console.log(data);
          });
      }, 300);
      // logout
      $timeout(function () {
        http.post(getUrls[0], params)
          .success(function (data) {});
      }, 300);

      // logout
      $timeout(function () {
        http.get(url)
          .success(function (data) {})
          .error(function (data) {
            console.log(data);
          });
      }, 300);

      // get security data
      // logout
      // get securiy data(error)

    }

  }

})();