!(function () {
    'use strict';
    
    angular
        .module('mo.seed.home')
        .config(config);
    
    config.$inject = ['$stateProvider'];
    
    function config($stateProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: "app/home/home.tpl.html",
                controller: "HomeController",
                controllerAs: "vm",
            });
    }
})();