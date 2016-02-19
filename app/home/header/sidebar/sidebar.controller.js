(function (angular, $) {
  'use strict';

  angular.module('bz.home.header.sidebar')
    .controller('headerSidebarController', sidebarController);

  /* @ngInject */
  function sidebarController($scope, $state, $timeout, headerSidebarService, logger) {
    /* jshint validthis:true */
    var sidebar = this;

    sidebar.menus = [];

    $scope.toggleClass = toggleClass;
    $scope.goMenu = goMenu;

    $scope.$on('init', init);

    /////////////////////
    $timeout(function () {
      sidebar.menus = headerSidebarService.getAll();

      logger.log('load sidebar data');

    }, 1000);

    function init() {
      $('.metisMenu').metisMenu();
    }

    function goMenu(menuCode) {
      // console.log(menuCode);
      $state.go('home.' + menuCode);
    }

    function toggleClass(key) {
      $(key).slideToggle(400);
    }

  }

})(window.angular, window.jQuery);