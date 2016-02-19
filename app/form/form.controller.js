(function (angular) {
  'use strict';

  angular.module('bz.form')
    .controller('formController', formController);

  /* @ngInject */
  function formController($scope, $timeout) {
    /* jshint validthis:true */
    var form = this;
    form.header = '';

    $timeout(function () {
      form.header = 'Forms';
    }, 1000);

  }

})(window.angular);