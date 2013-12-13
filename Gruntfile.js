/* global module:false */
module.exports = function(grunt) {

  // Project configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    meta: {
      banner:
        '/*!\n' +
        ' * reveal.js <%= pkg.version %> (<%= grunt.template.today("yyyy-mm-dd, HH:MM") %>)\n' +
        ' * http://lab.hakim.se/reveal-js\n' +
        ' * MIT licensed\n' +
        ' *\n' +
        ' * Copyright (C) 2013 Hakim El Hattab, http://hakim.se\n' +
        ' */'
    },

    // Tests will be added soon
    qunit: {
      files: [ 'test/**/*.html' ]
    },

    uglify: {
      options: {
        banner: '<%= meta.banner %>\n'
      },
      build: {
        src: 'js/reveal.js',
        dest: 'js/reveal.min.js'
      }
    },

    cssmin: {
      compress: {
        files: {
          'css/reveal.min.css': [ 'css/reveal.css' ]
        }
      }
    },

    sass: {
      main: {
        files: {
          'css/theme/default.css': 'css/theme/source/default.scss',
          'css/theme/formidable.css': 'css/theme/source/formidable.scss',
          'css/theme/beige.css': 'css/theme/source/beige.scss',
          'css/theme/night.css': 'css/theme/source/night.scss',
          'css/theme/serif.css': 'css/theme/source/serif.scss',
          'css/theme/simple.css': 'css/theme/source/simple.scss',
          'css/theme/sky.css': 'css/theme/source/sky.scss',
          'css/theme/moon.css': 'css/theme/source/moon.scss',
          'css/theme/solarized.css': 'css/theme/source/solarized.scss'
        }
      }
    },

    jshint: {
      options: {
        curly: false,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        eqnull: true,
        browser: true,
        expr: true,
        globals: {
          head: false,
          module: false,
          console: false,

          // Libs.
          sinon: false,

          // Test.
          it: false,
          describe: false,
          expect: false,
          before: false,
          beforeEach: false,
          after: false,
          afterEach: false,

          // Demo.
          hello: true,
          camel: true
        }
      },
      files: [
        "Gruntfile.js",
        "example/js/app/**/*.js",
        "example/js/spec/**/*.js"
      ]
    },

    mocha_phantomjs: {
      all: ["example/test.html"]
    },

    jade: {
      compile: {
        options: {
          pretty: true
        },
        files: {
          "index.html":               ["_templates/index.jade"],
          "example/test-empty.html":  ["_templates/example/test-layout.jade"],
          "example/test-mocha.html":  ["_templates/example/test-mocha.jade"],
          "example/test-chai.html":   ["_templates/example/test-chai.jade"],
          "example/test-sinon.html":  ["_templates/example/test-sinon.jade"],
          "example/test-hello.html":  ["_templates/example/test-hello.jade"],
          "example/test-camel.html":  ["_templates/example/test-camel.jade"],
          "example/test-sandbox.html": ["_templates/example/test-sandbox.jade"],
          "example/test.html":        ["_templates/example/test.jade"]
        }
      }
    },

    copy: {
      test: {
        files: [
          {
            dest: "skeleton/js/lib",
            expand: true,
            flatten: true,
            src: [
              "bower_components/mocha/mocha.js",
              "bower_components/mocha/mocha.css",
              "bower_components/chai/chai.js"
            ]
          },
          {
            dest: "skeleton/js/lib/sinon.js",
            src: "bower_components/sinon/index.js"
          }
        ]
      }
    },

    watch: {
      jade: {
        files: [
          "_templates/**/*.jade",
          "example/**/*.js"
        ],
        tasks: [
          "jade"
        ],
        options: {
          spawn: false,
          atBegin: true
        }
      },
      theme: {
        files: [
          "css/theme/source/*.scss",
          "css/theme/template/*.scss"
        ],
        tasks: "themes"
      }
    }

  });

  // Dependencies
  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-mocha-phantomjs");
  grunt.loadNpmTasks("grunt-contrib-cssmin");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-sass");
  grunt.loadNpmTasks("grunt-contrib-jade");

  // Default task
  grunt.registerTask( "default", [ "jshint", "mocha_phantomjs" ] );

  // Theme task
  grunt.registerTask( "themes", [ "sass" ] );

};
