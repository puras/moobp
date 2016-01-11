module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: {
            files: ['dist']
        },
        watch: {
            copy: {
                files: ['app/{,**/}*.html', 'app/assets/img/**', 'app/assets/js/**', 'app/assets/css/**'],
                tasks: ['copy:main']
            },
            copy_res: {
                files: ['node_modules/*'],
                tasks: ['copy:res']
            },
            livereload: {
                options: {
                    livereload: 9999
                },
                files: [
                    'dist/**'
                ]
            }
        },
        copy: {
            main: {
                files: [
                    {
                        expand: true,
                        cwd: 'app',
                        src: '{,**/}*.html',
                        dest: 'dist'
                    },
                    {
                        expand: true,
                        cwd: 'app/assets',
                        src: ['js/**', 'img/**', 'css/**'],
                        dest: 'dist/assets/'
                    }
                ]
            },
            res: {
                files: [
                    {
                        expand: true,
                        cwd: 'node_modules/bootstrap/dist/',
                        src: ['**'],
                        dest: 'dist/assets/lib/bootstrap'
                    },
                    {
                        expand: true,
                        cwd: 'node_modules/jquery/dist/',
                        src: ['**'],
                        dest: 'dist/assets/lib/jquery'
                    },
                    {
                        expand: true,
                        cwd: 'node_modules/font-awesome',
                        src: ['css/**', 'fonts/**'],
                        dest: 'dist/assets/lib/font-awesome/'
                    }
                ]
            }
        },
        connect: {
            server: {
                options: {
                    hostname: '*',
                    port: '8210',
                    livereload: '9999',
                    base: 'dist'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.registerTask('default', ['clean', 'copy', 'connect', 'watch']);
};