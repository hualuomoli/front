require.config({
	baseUrl: './',
	paths: {
		// angular
		'angular': '../bower_components/angular/angular.min',
		'angular-ui-router': '../bower_components/angular-ui-router/release/angular-ui-router.min',

		// 3rd part
		'jquery': '../bower_components/jquery/dist/jquery.min'
	},
	shim: {
		// angular
		'angular': {
			'exports': 'angular'
		},
		'angular-ui-router': {
			'deps': ['angular']
		}
	},
	deps: ['./config']
});