!(function () {
    'use strict';
    
    angular
        .module('mo.seed.components')
        .controller('HeaderController', HeaderController);
    
    HeaderController.$inject = [];
    
    function HeaderController() {
        var vm = this;
        
        vm.title;
        
        activate();
        
        //////////////
        
        function activate() {
            setTitle('Angular Seed');
        }
        
        function setTitle(title) {
            vm.title = title;
        }
    }
})();