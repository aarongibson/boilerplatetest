module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      dist: {
        options: {
          style: 'compressed'
        },
        files: {
          'assets/css/global.css': 'assets/scss/global.scss'
        }
      }
    },

    uglify: {
      build: {
        src: ['assets/js/libs/*.js', 'assets/js/global.js'], //input
        dest: 'assets/js/build/global.min.js' //output
      }
    },

    watch: {
      options: {
        livereload: true,
      },
      gruntfile: {
        files: 'Gruntfile.js',
        tasks: ['jshint:gruntfile'],
      },
      src: {
        files: ['assets/js/libs/*.js', 'assets/scss/*.scss', '!libs/dontwatch.js'],
        tasks: ['default'],
      },
    }
  });



  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['sass', 'uglify', 'watch']);

};