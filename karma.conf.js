// Karma configuration
// Generated on Thu Mar 03 2016 08:29:06 GMT+0100 (Romance Standard Time)

module.exports = function (config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: './',

        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],


        // list of files / patterns to load in the browser
        files: [
            'node_modules/angular/angular.min.js',
            'node_modules/angular-resource/angular-resource.min.js',
            'node_modules/angular-route/angular-route.min.js',
            'node_modules/angular-mocks/angular-mocks.js',
            'node_modules/angular-ui-bootstrap/dist/ui-bootstrap-tpls.js',
            'app/**/*.js',
            'test/**/*.js',
            'app/templates/**/*.html'
        ],




        // list of files to exclude
        exclude: [],


        reporters: ['progress', 'coverage'],

        preprocessors: {
            './app/**/*.js': 'coverage',
            "./app/templates/**/*.html": ["ng-html2js"]
        },
        ngHtml2JsPreprocessor: {
            stripPrefix: 'app/'
        },




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
        singleRun: false,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity
    })
};