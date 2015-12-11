!(function () {
    'use strict';
    
    angular
        .module('mo.seed.home')
        .controller('HomeController', HomeController);
    
    HomeController.$inject = ['photosFactory'];
    
    function HomeController(photosFactory) {
        var vm = this;
        
        vm.tools = [
            {
                name: "AngularJS",
                description: "AngularJS is a structural framework for dynamic web apps. It lets you use HTML as your template language and lets you extend HTML's syntax to express your application's components clearly and succinctly. Angular's data binding and dependency injection eliminate much of the code you would otherwise have to write.",
                link: "https://docs.angularjs.org/guide/introduction",
                img: 'assets/AngularJS-Shield-small.png'
            },
            {
                name: "Sass",
                description: "Sass is an extension of CSS that adds power and elegance to the basic language. It allows you to use variables, nested rules, mixins, inline imports, and more, all with a fully CSS-compatible syntax. Sass helps keep large stylesheets well-organized, and get small stylesheets up and running quickly, particularly with the help of the Compass style library.",
                link: "http://sass-lang.com/documentation/file.SASS_REFERENCE.html",
                img: 'assets/sass_logo.svg'
            },
            {
                name: "Grunt",
                description: "Grunt is a task-based command line build tool for JavaScript projects. The Grunt ecosystem is huge and it's growing every day. With literally hundreds of plugins to choose from, you can use Grunt to automate just about anything with a minimum of effort. If someone hasn't already built what you need, authoring and publishing your own Grunt plugin to npm is a breeze.",
                link: "http://sasslang.com",
                img: 'assets/grunt_logo.png'
            }
        ];

        
        
        activate();
        
        //////////////
        
        function activate() {}
        
    }
})();