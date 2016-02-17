(function (angular) {
	'use strict';

	angular.module('app.core')
		.directive('onFinishRender', finishRender);

	/* @ngInject */
	function finishRender($timeout) {
		return {
			restrict: 'A',
			link: function (scope, element, attr) {
				$timeout(function () {
					if (attr.onFinishRender) {
						scope.$emit(attr.onFinishRender);
					} else {
						scope.$emit('init');
					}
				});
			}
		};
	}

})(angular);