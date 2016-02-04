({
    appDir: '../app',
    baseUrl: './',
    dir: '../dist',
    modules: [{
        name: 'main',
        exclude: ['jquery', 'bootstrap', 'angular', 'angular-ui-router', 'angular-async-loader']
    }],
    optimizeCss: 'standard',
    removeCombined: true,
    paths: {
        'angular': '../assets/angular/angular.min',
        'angular-ui-router': '../assets/angular-ui-router/release/angular-ui-router.min',
        'angular-async-loader': '../assets/angular-async-loader/dist/angular-async-loader.min',
        'jquery': '../assets/jquery/dist/jquery.min',
        'bootstrap': '../assets/bootstrap/dist/js/bootstrap.min'
    },
    shim: {
        'angular': {
            exports: 'angular'
        },
        'angular-ui-router': {
            deps: ['angular']
        },
        'bootstrap': {
            deps: ['jquery']
        }
    }
})
