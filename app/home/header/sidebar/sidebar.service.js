(function (angular) {
  'use strict';

  angular.module('bz.home.header.sidebar')
    .service('headerSidebarService', sidebarService);

  /* @ngInject */
  function sidebarService() {

    return {
      getAll: getAll
    };

    function getAll() {
      return [{
        "code": "dashboard",
        "name": "Dashboard",
        "sort": "1",
        "icon": "fa-dashboard"
      }, {
        "code": "chart",
        "name": "Charts",
        "sort": "2",
        "icon": "fa-bar-chart-o"
      }, {
        "code": "table",
        "name": "Tables",
        "sort": "3",
        "icon": "fa-table"
      }, {
        "code": "form",
        "name": "Forms",
        "sort": "4",
        "icon": "fa-edit"
      }, {
        "code": "ui-elements",
        "name": "UI Elements",
        "sort": "5",
        "icon": "fa-wrench",
        "children": [{
          "code": "panelsWells",
          "name": "Panels and Wells",
          "sort": "1"
        }, {
          "code": "buttons",
          "name": "Buttons",
          "sort": "2"
        }, {
          "code": "notifications",
          "name": "Notifications",
          "sort": "3"
        }, {
          "code": "typography",
          "name": "Typography",
          "sort": "4"
        }, {
          "code": "icons",
          "name": "Icons",
          "sort": "5"
        }, {
          "code": "grid",
          "name": "Grid",
          "sort": "6"
        }, {
          "code": "demo",
          "name": "Demo",
          "sort": "1",
          "children": [{
            "code": "first",
            "name": "First Menu",
            "sort": "2"
          }, {
            "code": "second",
            "name": "Second Menu",
            "sort": "3"
          }, {
            "code": "thrid",
            "name": "Thrid Menu",
            "sort": "1"
          }]
        }]
      }];
    }

  }

})(window.angular);