module.exports = function(grunt) {
    // All upfront config goes in a massive nested object.
    grunt.initConfig({
        
        // You can set arbitrary key-value pairs.
        distFolder: 'dist',
        pkg: grunt.file.readJSON('package.json'),
        bower_concat: {
            vendor: {
                dest: '.tmp/bower.js',
                exclude: [],
                dependencies: {
                    angular: 'jquery'
                }
            }
        },
        clean: {
            main: ['dist'],
            styles: [".tmp/*.less", "src/css/*"],
            app: ['.tmp/app.js'],
            vendor: ['.tmp/vendor.js']
        },
        concurrent: {
			dev: ['watch:styles', 'connect:dev'],
            dist: ['connect:dist'],
			options: {
				logConcurrentOutput: true,
				limit: 10
			}
		},
        concat: {
            app: {
                src: [
                    "src/app/app.module.js",
                    "src/app/**/*.module.js",
                    "src/app/**/*.js"
                ],
                dest: ".tmp/app.js"
            },
            styles: {
                src: [
                    'src/styles/*.less', 
                    'src/styles/vendor/**/*.less', 
                    'src/app/**/*.less'
                ],
                dest: '.tmp/concat.less'
            },
            vendor: {
                src: [
                    '.tmp/bower.js',
                    'src/lib/**/*.js'
                ],
                dest: ".tmp/vendor.js"
            }
        },
        connect: {
            dev: {
                options: {
                    port: 9000,
                    base: 'src',
                    keepalive: true
                }
            },
            dist: {
                options: {
                    port: 9000,
                    base: 'dist',
                    keepalive: true
                }
            }
            
        },
        copy: {
            html: {
                expand: true,
                cwd: 'src/',
                src: ['**/*.html', '!bower_components/**'],
                dest: 'dist/'
            },
            assests: {
                expand: true,
                cwd: 'src/',
                src: ['assets/**'],
                dest: 'dist/'
            }
        },
        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1
            },
            dist: {
                files: {
                    'dist/css/app.min.css': ['.tmp/app.css']
                }
            }
        },
        sass: {
            options: {
                sourceMap: false
            },
            dev: {
                files: {
                    'src/css/app.css': 'src/styles/main.scss'
                }
            },
            dist: {
                files: {
                    '.tmp/app.css': 'src/styles/main.scss'
                }
            }
        },
        uglify: {
            app: {
                files: {
                    'dist/js/app.min.js': ['.tmp/app.js']
                }
            },
            vendor: {
                files: {
                    'dist/js/vendor.min.js': ['.tmp/vendor.js']
                }
            }
        },
        useminPrepare: {
            html: 'src/index.html',
            options: {
                dest: 'dist'
            }
        },
        usemin: {
            html: ['dist/index.html']
        },
        watch: {
            styles: {
                files: ['src/styles/**/*.scss'], // which files to watch
                tasks: ['build-styles-dev'],
                options: {
                    nospawn: true
                }
            }
        }
    }); // The end of grunt.initConfig
    
    grunt.loadNpmTasks('grunt-bower-concat');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-concurrent');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-usemin');
    
    
    grunt.registerTask('default', ['server']);
    
    // Build Tasks
    grunt.registerTask('build', ['clean:main', 'build-styles-dist', 'build-app', 'build-vendor', 'copy:html', 'copy:assests', 'useminPrepare','usemin']);
    //Styles
    grunt.registerTask('build-styles-dev', ['clean:styles', 'sass:dev']);
    grunt.registerTask('build-styles-dist', ['clean:styles', 'sass:dist', 'cssmin:dist']);
    
    //App JS
    grunt.registerTask('build-app', ['clean:app', 'concat:app', 'uglify:app']);
    
    //Vendor JS
    grunt.registerTask('build-vendor', ['clean:vendor', 'bower_concat:vendor', 'concat:vendor', 'uglify:vendor']);
    
    //Server Tasks
    //Dev server Task.  Watches for Changes to LESS files. And starts connect from src directory
    grunt.registerTask('server', ['build-styles-dev', 'concurrent:dev']);
    
    //Dist server Task.  Builds from src to dist.  Starts connect from the dist directory
    grunt.registerTask('server-dist', ['build', 'concurrent:dist']);
    
};