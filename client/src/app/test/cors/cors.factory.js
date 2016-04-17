(function () {
  'use strict';

  var urls = ['http://localhost:80/web/login', 'http://127.0.0.1:80/web/login', 'http://192.168.10.212:80/web/login'];

  var params = {
    username: 'admin',
    password: 'admin'
  };

  angular.module('app')
    .factory('testCors', cors);

  /** @ngInject */
  function cors($http, http, logger) {

    return {
      // cross domain
      callJquery:function(){
      for (var i = 0; i < urls.length; i++) {
          var url = urls[i];

          // ajax
          ajaxGet(url);
          ajaxPost(url);

        }
      },
      callAngular:function(){
      for (var i = 0; i < urls.length; i++) {
          var url = urls[i];

          // http
          httpGet(url);
          httpPost(url);

        }
      },
      callWrap:function(){
        for (var i = 0; i < urls.length; i++) {
          var url = urls[i];

          // wrap
          wrapGet(url);
          wrapPost(url);

        }
      },
      call: function () {
        for (var i = 0; i < urls.length; i++) {
          var url = urls[i];

          // wrap methodName
          wrap(url);
        }
      },
      login:function(){
        return http.post('http://127.0.0.1:80/web/login',params)
        .success(function(data){
          if(data.success){
            console.log('login success.')
          }else{
            console.log('login error');
            console.log(data);
          }
        });
      },
      logout:function(){
       return  http.post('http://127.0.0.1:80/web/logout',params)
        .success(function(data){
          if(data.success){
            console.log('logout success.')
          }
        });
      },
      getUser:function(){
       return  http.get('http://127.0.0.1:80/web/a/user/' + params.username)
        .success(function(data){
          console.log(data);
        });
      }
    }


    function ajaxGet(url) {
      $.ajax(url, {
        type: 'Get',
        data: params,
        xhrFields: {
          withCredentials: true
        },
        crossDomain: true,
        success: function (data, status, xhr) {
          logger.debug('ajax get url ', url);
          logger.debug('ajax get status ', status);
          logger.debug('ajax get data ', data);
        }
      });
    }

    function ajaxPost(url) {
      $.ajax(url, {
        type: 'Post',
        data: params,
        xhrFields: {
          withCredentials: true
        },
        crossDomain: true,
        success: function (data, status, xhr) {
          logger.debug('ajax post url ', url);
          logger.debug('ajax post status ', status);
          logger.debug('ajax post data ', data);
        }
      });
    }

    function httpGet(url) {
      $http({
          method: 'GET',
          url: url,
          params: params
        })
        .success(function (data, status) {
          logger.debug('anguarl http get url ', url);
          logger.debug('anguarl http get status ', status);
          logger.debug('anguarl http get data ', data);
        });
    }

    function httpPost(url) {
      $http({
          method: 'POST',
          url: url,
          params: $.param(params),
          headers: {
            'content-type': 'application/x-www-form-urlencoded'
          }
        })
        .success(function (data, status) {
          logger.debug('anguarl http post url ', url);
          logger.debug('anguarl http post status ', status);
          logger.debug('anguarl http post data ', data);
        });
    }

    function wrapGet(url) {
      http.get(url, params)
        .success(function (data, status) {
          logger.debug('wrap http post url ', url);
          logger.debug('wrap http post status ', status);
          logger.debug('wrap http post data ', data);
        });
    }

    function wrapPost(url) {
      http.post(url, params)
        .success(function (data, status) {
          logger.debug('wrap http post url ', url);
          logger.debug('wrap http post status ', status);
          logger.debug('wrap http post data ', data);
        });
    }

    function wrap() {
      var url = '/login'; // use config baseUrl

      http.call('GET', url, params)
        .success(function (data, status) {
          logger.debug('GET wrap http url ', url);
          logger.debug('GET wrap http status ', status);
          logger.debug('GET wrap http data ', data);
        });
      http.call('get', url, params)
        .success(function (data, status) {
          logger.debug('get wrap http url ', url);
          logger.debug('get wrap http status ', status);
          logger.debug('get wrap http data ', data);
        });
      http.call('POST', url, params)
        .success(function (data, status) {
          logger.debug('POST wrap http url ', url);
          logger.debug('POST wrap http status ', status);
          logger.debug('POST wrap http data ', data);
        });
      http.call('post', url, params)
        .success(function (data, status) {
          logger.debug('post wrap http url ', url);
          logger.debug('post wrap http status ', status);
          logger.debug('post wrap http data ', data);
        });
    
    }

  }

})();