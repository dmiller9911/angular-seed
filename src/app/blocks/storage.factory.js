!(function () {
    'use strict';
    
    angular
        .module('mo.seed.blocks')
        .factory('storageService', storageService);
    
    storageService.$inject = ['$window'];
    
    function storageService($window) {
        var localStorage = $window.localStorage;
        var sessionStorage = $window.sessionStorage;
        
        var service = {
            local: {
                getItem: localGetItem,
                setItem: localSetItem,
                removeItem: localRemoveItem
            },
            session:  {
                getItem: sessionGetItem,
                setItem: sessionSetItem,
                removeItem: sessionRemoveItem
            }
        };
        return service;
        
        ///////////////
       
        function localGetItem(key) {
            return JSON.parse(localStorage.getItem(key));
        }
        
        function localSetItem(key, value) {
            localStorage.setItem(key, JSON.stringify(value));
        }
        
        function localRemoveItem(key) {
            localStorage.removeItem(key);
        }
        
        function sessionGetItem(key) {
            return JSON.parse(sessionStorage.getItem(key));
        }
        
        function sessionSetItem(key, value) {
            sessionStorage.setItem(key, JSON.stringify(value));
        }
        
        function sessionRemoveItem(key) {
            sessionStorage.removeItem(key);
        }
    }
})();