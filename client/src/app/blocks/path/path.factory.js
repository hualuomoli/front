(function () {
  'use strict';

  angular.module('blocks.path')
    .factory('path', path);


  /** @ngInject */
  function path() {

    return {
      join: join
    }

    function join(a, b) {
      if (!a) {
        return b;
      }
      if (!b) {
        return a;
      }
      // a end with /
      var c = a.substring(a.length - 1);
      if (c !== '/' && c !== '\\') {
        a = a + '/';
      }

      // b not start with /
      c = b.substring(0, 1);
      if (c === '/' || c === '\\') {
        b = b.substring(1);
      }
      return a + b;
    }

  }

})();