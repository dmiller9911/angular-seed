!(function () {
    'use strict';
    
    angular
        .module('mo.seed.core')
        .config(config);
    
    config.$inject = ['$httpProvider', 'moApiProvider'];
    
    function config($httpProvider, moApiProvider) {
        
        $httpProvider.interceptors.push('httpInterceptor');
        
        moApiProvider.setBaseUrl('http', 'jsonplaceholder.typicode.com');
    }
})();