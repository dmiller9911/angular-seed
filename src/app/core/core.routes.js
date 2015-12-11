!(function () {
    'use strict';
    
    angular
        .module('mo.seed.core')
        .config(config);
    
    config.$inject = ['$urlRouterProvider'];
    
    function config($urlRouterProvider) {
        $urlRouterProvider
            .otherwise('/');
    }
})();