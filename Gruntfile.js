module.exports = function(grunt) {

    grunt.initConfig({
        less: {
            dev: {
                options: {
                    strictImports: true
                },
                files: {
                    "css/style.dist.css": "less/style.less"
                }
            }
        },

        concat: {
            js: {
                src: [
                    'bower_components/angular/angular.js',
                    'js/app.js'
                ],
                dest: 'js/app.dist.js'
            }
        },

        connect: {
            server: {
                options: {
                    port: "9001"
                }
            }
        },

        watch: {
            dev: {
                files: [
                    "less/*",
                    "js/*"
                ],
                tasks: ['default']
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['less', 'concat']);
    grunt.registerTask('dev', ['default', 'connect', 'watch']);

};
