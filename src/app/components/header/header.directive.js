!(function () {
    'use strict';
    
    angular
        .module('mo.seed.components')
        .directive('moHeader', moHeader);
    
    moHeader.$inject = [];
    
    function moHeader() {
        
        var directive = {
            restrict: "E",
            templateUrl: "app/components/header/header.tpl.html",
            controller: "HeaderController",
            controllerAs: "vm",
            scope: {},
            bindToController: true,
            link: link
        };
        
        return directive;
        
        ///////////////
        
        function link(scope, el, attr, ctrl) {
            
        }
    }
})();