(function (angular) {
  'use strict';

  angular.module('bz.chart')
    .controller('chartController', chartController);

  /* @ngInject */
  function chartController($scope, $timeout, chartService, logger) {
    /* jshint validthis:true */
    var chart = this;

    chart.header = '';

    chart.line = {};
    chart.bar = {};
    chart.donut = {};
    chart.radar = {};
    chart.pie = {};
    chart.polar = {};
    chart.dynamic = {};

    $scope.lineClick = lineClick;
    $scope.dynamicToggle = dynamicToggle;

    ///////////////////////////////

    $timeout(function () {

      chart.header = 'Charts';

      chart.line = chartService.line();
      chart.bar = chartService.bar();
      chart.donut = chartService.donut();
      chart.radar = chartService.radar();
      chart.pie = chartService.pie();
      chart.polar = chartService.polar();
      chart.dynamic = chartService.dynamic();

      logger.log('load chart data');

    }, 1000);
    ///
    function lineClick(points, evt) {
      console.log(points, evt);
    }

    function dynamicToggle() {
      chart.dynamic.type = chart.dynamic.type === 'PolarArea' ?
        'Pie' : 'PolarArea';
    }

  }

})(window.angular);