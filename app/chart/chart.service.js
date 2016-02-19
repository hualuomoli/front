(function (angular) {
  'use strict';

  angular.module('bz.chart')
    .service('chartService', chartService);

  /* @ngInject */
  function chartService() {
    return {
      line: line,
      bar: bar,
      donut: donut,
      radar: radar,
      pie: pie,
      polar: polar,
      dynamic: dynamic
    };

    ///////////
    function line() {
      return {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        series: ['Series A', 'Series B'],
        data: [
          [65, 59, 80, 81, 56, 55, 40],
          [28, 48, 40, 19, 86, 27, 90]
        ]
      };
    }

    function bar() {
      return {
        labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
        series: ['Series A', 'Series B'],

        data: [
          [65, 59, 80, 81, 56, 55, 40],
          [28, 48, 40, 19, 86, 27, 90]
        ]
      };
    }

    function donut() {
      return {
        labels: ["Download Sales", "In-Store Sales", "Mail-Order Sales"],
        data: [300, 500, 100]
      };
    }

    function radar() {
      return {
        labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],

        data: [
          [65, 59, 90, 81, 56, 55, 40],
          [28, 48, 40, 19, 96, 27, 100]
        ]
      };
    }

    function pie() {
      return {
        labels: ["Download Sales", "In-Store Sales", "Mail-Order Sales"],
        data: [300, 500, 100]
      };
    }

    function polar() {
      return {
        labels: ["Download Sales", "In-Store Sales", "Mail-Order Sales", "Tele Sales", "Corporate Sales"],
        data: [300, 500, 100, 40, 120]
      };
    }

    function dynamic() {
      return {
        labels: ["Download Sales", "In-Store Sales", "Mail-Order Sales", "Tele Sales", "Corporate Sales"],
        data: [300, 500, 100, 40, 120],
        type: 'PolarArea',
      };
    }

  }

})(window.angular);