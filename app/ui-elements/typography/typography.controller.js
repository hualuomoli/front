(function (angular) {
  'use strict';

  angular.module('bz.typography')
    .controller('typographyController', typographyController);

  /* @ngInject */
  function typographyController($scope, $timeout) {
    /* jshint validthis:true */
    var typography = this;
    typography.header = '';

    $timeout(function () {
      typography.header = 'Typography';
    }, 1000);

  }

})(window.angular);