(function () {
  'use strict';

  describe('test karma', function () {
    // 使用的公交
    var _path;


    // 模拟我们的Application模块并注入我们自己的依赖
    beforeEach(angular.mock.module('app'));

    // 获取工具，通过inject获取
    beforeEach(angular.mock.inject(function ($rootScope, $controller, path) {

      // 设置为本地变量
      _path = path;

    }));


    // 测试从这里开始
    it('should have variable states"', function () {

      expect(_path.join('http://localhost', 'api/user')).toBe('http://localhost/api/user');
      expect(_path.join('http://localhost', '/api/user')).toBe('http://localhost/api/user');
      expect(_path.join('http://localhost/', 'api/user')).toBe('http://localhost/api/user');
      expect(_path.join('http://localhost/', '/api/user')).toBe('http://localhost/api/user');


    });


  });

})();