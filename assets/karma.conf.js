// Karma configuration
// Generated on Thu Dec 04 2014 12:51:15 GMT-0500 (EST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '.',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      // bower:js
      'libs/jquery/dist/jquery.js',
      'libs/angular/angular.js',
      'libs/angular-route/angular-route.js',
      'libs/bootstrap/dist/js/bootstrap.js',
      'libs/js-logger/src/logger.js',
      'libs/patternfly/dist/js/patternfly.js',
      'libs/lodash/dist/lodash.compat.js',
      'libs/sugarjs/release/sugar.min.js',
      'libs/angular-sanitize/angular-sanitize.js',
      'libs/webcomponentsjs/webcomponents.js',
      'libs/polymer/polymer.js',
      // endbower
      'js/loggingInit.js',
      'js/hawtio-plugin-loader.js',
      'js/app.js',
      'tests/**/*.ts'
    ],

    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'tests/**/*.ts': ['typescript']
    },

    typescriptPreprocessor: {
      options: {
        target: 'ES5',
        module: 'commonjs',
        noImplicitAny: false,
        noResolve: false,
        removeComments: false
      },
      transformPath: function(path) {
        return path.replace(/\.ts$/, '.js');
      },
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'notify'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};
