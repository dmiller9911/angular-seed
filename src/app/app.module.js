!(function () {
    'use strict';
    
    angular
        .module('mo.seed', [
            /* Vendor Modules */
            'ui.router',
        
            /* App Modules */
            'mo.seed.blocks',
            'mo.seed.core',
            'mo.seed.components',
            'mo.seed.home',
            'mo.seed.photos'
        ]);
})();