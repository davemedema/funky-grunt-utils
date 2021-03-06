'use strict';

module.exports = function(grunt) {

  // Config
  // ---

  grunt.initConfig({

    // package.json
    pkg: grunt.file.readJSON('package.json'),

    // `clean`
    clean: {
      all: ['tmp']
    },

    // `jshint`
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        'Gruntfile.js',
        'lib/**/*.js',
        '<%= nodeunit.files %>'
      ]
    },

    // `nodeunit`
    nodeunit: {
      files: ['test/**/*_test.js']
    }
  });

  // Load npm tasks
  // ---

  require('load-grunt-tasks')(grunt);

  // Task aliases
  // ---

  grunt.registerTask('default', ['test']);

  grunt.registerTask('release', function(type) {
    grunt.task.run('test');
    grunt.task.run('funky_bump:' + (type || 'patch'));
    grunt.task.run('funky_tag');
  });

  grunt.registerTask('test', ['clean', 'jshint', 'nodeunit']);
  grunt.registerTask('t', ['test']);

};
