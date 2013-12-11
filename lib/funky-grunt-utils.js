/*
 * funky-grunt-utils
 * https://github.com/davemedema/funky-grunt-utils
 *
 * Copyright (c) 2013 Dave Medema
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  return {

    /**
     * Displays `message` and aborts Grunt. Optionally logs `error`.
     *
     * @param {String} message
     * @param {Mixed} error
     */
    fail: function(message, error) {
      if (error) grunt.log.error(error);
      grunt.fail.warn(message || 'Task failed.');
    }
  };

};
