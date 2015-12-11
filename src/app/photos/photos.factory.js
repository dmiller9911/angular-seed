!(function () {
    'use strict';
    
    angular
        .module('mo.seed.photos')
        .factory('photosFactory', photosFactory);
    
    photosFactory.$inject = ['$http', 'moApi'];
    
    function photosFactory($http, moApi) {
        var BASE_URL = moApi.baseUrl + 'photos/'
        
        var factory = {
            create: create,
            get: get,
            remove: remove,
            search: search,
            update: update
        };
        
        return factory;
        
        ///////////////
        
        function create(photo) {
            return $http.post(BASE_URL, photo);
        }
        
        function get(photoId) {
            return $http.get(BASE_URL + photoId);
        }
        
        function remove(photo) {
            return $http.delete(BASE_URL + photo);
        }
        
        function search(query) {
            return $http.get(BASE_URL, { params: query });
        }
        
        function update(photoId, update) {
            return $http.put(BASE_URL + photoId, update);
        }
    }
})();