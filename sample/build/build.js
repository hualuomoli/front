({
	appDir: '../app',
	baseUrl: './',
	dir: '../dist',
	modules: [{
		name: 'main'
	}],
	optimizeCss: 'standard',
	removeCombined: false,
	paths: {
		'angular': '../../bower_components/angular/angular.min',
		'angular-ui-router': '../../bower_components/angular-ui-router/release/angular-ui-router.min',
		'angular-async-loader': '../../bower_components/angular-async-loader/dist/angular-async-loader.min',
		'jquery': '../../bower_components/jquery/dist/jquery.min',
		'bs3': '../../bower_components/bootstrap/dist/js/bootstrap.min'
	},
	shim: {
		'angular': {
			exports: 'angular'
		},
		'angular-ui-router': {
			deps: ['angular']
		},
		'bs3': {
			deps: ['jquery']
		}
	}
})