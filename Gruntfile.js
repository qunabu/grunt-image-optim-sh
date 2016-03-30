module.exports = function(grunt) {
  var target = grunt.option('target') || 'images/';
  //var mozjpeg = require('imagemin-mozjpeg');

  grunt.initConfig({
    imagemin: {                          // Task
      dynamic: {                         // Another target
        files: [{
          expand: true,                  // Enable dynamic expansion
          cwd: target,                   // Src matches are relative to this path
          src: ['**/*.{png,jpg,gif}'],   // Actual patterns to match
          dest: target                  // Destination path prefix
        }]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.registerTask('default', ['imagemin']);
};