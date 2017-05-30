/* globals module, grunt */

module.exports = function (grunt) {

    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);


    grunt.initConfig({
        pkg       : grunt.file.readJSON('package.json'),
        bowerPath : "bower_components",
        libPath   : "js/libraries/",

        //------------------------------------------------
        // Lint Tasks
        //------------------------------------------------

        jshint: {
            options: {
                jshintrc: true
            },
            all: ["Gruntfile.js", "js/script.js"]
        },

        //------------------------------------------------
        // Bower Concatination Tasks
        //------------------------------------------------

        bower_concat: {
            all: {
                options: {
                    separator : ';\n',
                },
                dest: {
                    'js' : 'js/bower.js',
                    'css' : 'scss/bower.css',
                },
                include: [
                    'jquery',
                    'bootstrap',
                    'tether',
                    'jquery.easing',
                ],
                dependencies: {
                    'bootstrap' : ['jquery', 'tether']
                },
                mainFiles: {
                    //'tether' : ['dist/js/tether.js']
                },
                exclude: [ ],
            },
        },

        //------------------------------------------------
        // Bower Copy Files Tasks
        //------------------------------------------------

        bowercopy: {
            options: {

            },
            sass: {
                options: {
                    destPrefix: 'scss'
                },
                files: {
                    'bootstrap' : 'bootstrap/scss'
                }
            },
            folders: {
                files: {
                    'js/bootstrap' : 'bootstrap/js/src'
                }
            },
        },

        //------------------------------------------------
        // Uglify and Minify
        //------------------------------------------------

        uglify: {
            my_target: {
                files: {
                    'js/ugly-bower.min.js' : ['js/bower.js'],
                    'js/ugly-script.min.js' : ['js/script.js'],
                    'js/ugly-main.min.js' : ['js/bower.js', 'js/script.js'],
                }
            },
        },
        cssmin: {
            target: {
                files: {
                    'css/ugly-bower.min.css' : ['css/bower.css'],
                    'style.css' : ['style.css'],
                }
            },
        },

        //------------------------------------------------
        // Sass Processing Tasks
        //------------------------------------------------

        sass: {
            dist: {
                files: {
                    "style.css" : "scss/app.scss"
                }
            }
        },

        //------------------------------------------------
        // Watch Tasks
        //------------------------------------------------

        watch: {
            scripts: {
                files : ["js/script.js"],
                tasks : ["serve"],
                options : {
                    spawn : false
                },
            },
            php: {
                files : ["**/*.php"],
                tasks : ["serve"],
                options : {
                    spawn : false
                },
            },
            sass: {
                files: ["scss/**/*.scss"],
                tasks: ["sass"],
            },
            livereload: {
                options: {
                    livereload : true
                },
                files: [ "style.css", "bootstrap.scss", "**/*.php", "js/script.js" ],
            },
        },
    });// end grunt.initConfig

    grunt.registerTask('serve', [ 'build','watch' ]);
    grunt.registerTask('server', 'serve');
    grunt.registerTask('default', ['serve']);
    grunt.registerTask('build',[ 'sass' ]);

    // grunt.registerTask('build',[ 'sass', 'uglify', 'cssmin' ]);
    grunt.registerTask('bowerBuild',[ 'bower_concat' ]);
    grunt.registerTask('bowerCopy',[ 'bowercopy' ]);
    grunt.registerTask('makeUgly',[ 'uglify', 'cssmin' ]);

};