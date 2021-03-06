module.exports = function(grunt) {

  grunt.initConfig({

    less: {
      development: {
        options: {
          paths: ["public/styles"]
        },
        files: {
          "public/styles/styles.css": "public/less/styles.less"
        }
      },
      production: {
        options: {
          paths: ["public/styles"],
          cleancss: true
        },
        files: {
          "public/styles/styles.css": "public/less/styles.less"
        }
      }
    },

    concat: {
      options: {
        separator: ';',
      },
      js: {
        src: [
        'bower_components/jquery/dist/jquery.js',
        'bower_components/OwlCarousel/owl-carousel/owl.carousel.js',
        'bower_components/bootstrap/dist/js/bootstrap.js',
        'bower_components/angular/angular.js',
        'bower_components/angular-scroll/angular-scroll.js'
        ],
        dest: 'public/js/libs.js'
      }
    },

    cssmin: {
      combine: {
        files: {
          'public/styles/libs.css': [
          'bower_components/bootstrap/dist/css/bootstrap.css',
          'bower_components/OwlCarousel/owl-carousel/owl.carousel.css',
          'bower_components/OwlCarousel/owl-carousel/owl.theme.css',
          'bower_components/font-awesome/css/font-awesome.min.css'
          ]
        }
      }
    },

    uglify: {
      js: {
        files: {
          'public/js/libs.min.js': 'public/js/libs.js'
        }
      },
      scripts: {
        files: {
          'public/js/app.min.js': 'public/js/app.js'
        }
      }
    },

    watch: {
      styles: {
        files: ['public/less/*.less'],
        tasks: ['less']
      },
      scripts: {
        files: ['public/js/app.js'],
        tasks: ['uglify:scripts']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['concat', 'uglify', 'cssmin', 'watch']);
};