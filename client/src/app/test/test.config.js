(function () {
  'use strict';

  angular.module('app')
    .config(config)
    .run(run);

  /* @ngInject */
  function config(testHandlerProvider, httpHandlerProvider) {
    testHandlerProvider.config.enable = true;
    httpHandlerProvider.config.baseUrl = 'http://localhost:80/web';
  }


  /* @ngInject */
  function run(testHandler, testCors) {
    if (!testHandler.config.enable) {
      return;
    }
    // cors
    // testCors.callJquery();
    // testCors.callAngular();
    // testCors.callWrap();
    // testCors.call();

    // login - getUser - logout - getUser
    testCors.login()
      .success(function(){
        testCors.getUser()
          .success(function(data,status){
            console.log('get user message ' + status);
            testCors.logout()
              .success(function(){
                 testCors.getUser()
                  .success(function(data){
                    console.log('can not logout user');
                    console.log(data);
                  })
                  .error(function(data,status){
                    console.log('logout ok ,can not get user message');
                    console.log(status);
                  });
              });
          });
      });
    // 

  }

})();