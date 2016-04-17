(function () {
  'use strict';

  angular.module('app', [
    'blocks.logger',
    'blocks.exception',
    'blocks.routehelper',
    'blocks.http',

    'ui.bootstrap',
    'oc.lazyLoad'

  ]);

})();