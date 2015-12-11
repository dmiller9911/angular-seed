!(function () {
    'use strict';
    
    angular
        .module('mo.seed.core')
        .provider('moApi', moApi);
    
    moApi.$inject = [];
    
    function moApi() {
        
        var api = {
            baseUrl: ""
        };
        
        var provider = {
            setBaseUrl: setBaseUrl,
            '$get': $get
        }
        
        return provider;
        
        ///////////////
        
        function setBaseUrl(protocol, host, port, path) {
            protocol = protocol || 'http';
            
            api.baseUrl = protocol + '://' + host;
            
            if (port) {
                api.baseUrl += ':' + port
            }
            
            api.baseUrl += '/';
            
            if (path) {
                api.baseUrl += path;
            }
        }
        
        function $get() {
            return api;
        }
    }
})();