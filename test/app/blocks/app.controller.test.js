(function () {
  'use strict';

  describe('test controller', function () {
    // 我们会在测试中使用这个scope
    var scope;


    // 模拟我们的Application模块并注入我们自己的依赖
    beforeEach(angular.mock.module('app'));

    // 模拟Controller，并且包含 $rootScope 和 $controller
    beforeEach(angular.mock.inject(function ($rootScope, $controller) {

      //创建一个空的 scope
      scope = $rootScope.$new();

      //声明 Controller并且注入已创建的空的 scope
      $controller('TypeaheadDemoCtrl', {
        $scope: scope
      });

    }));


    // 测试从这里开始
    it('should have variable states"', function () {

      expect((typeof scope.states)).toBe('object');

    });


  });

})();