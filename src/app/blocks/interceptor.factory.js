!(function () {
    'use strict';
    
    angular
        .module('mo.seed.blocks')
        .factory('httpInterceptor', httpInterceptor);
    
    httpInterceptor.$inject = ['$q', '$injector'];
    
    function httpInterceptor($q, $injector) {
        
        var service = {
            requestError: requestError,
            request: request,
            response: response,
            responseError: responseError           
        };
        
        return service;
        
        /////////////
        
        function request(config) {
            return config;
        }
        
        function requestError(rejection) {
            return $q.reject(rejection);
        }
        
        function response(response) {
            return response;
        }
        
        function responseError(rejection) {
            var logger = $injector.get('logger');
            logger.error(rejection.data.message, rejection.data);
            return $q.reject(rejection);
        }
    }
})();