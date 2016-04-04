var config = require('./gulpfile.config');


var files = []
    .concat(config.polyfillLibs)
    .concat(config.angular2Libs)
    .concat([
        'node_modules/angular2/bundles/testing.dev.js'
    ])
    .concat(config.foundationSitesLibs)
    .concat([
        'src/test/boot.js',
        {pattern: 'src/test/*.spec.js', included: false, watched: false},
        {pattern: 'src/app/**/*.js', included: false, watched: false}
    ]);

console.log('karma files:', files);

module.exports = function (config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: './',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],


        // list of files / patterns to load in the browser
        files: files,


        proxies: {
            "/test/": "/base/src/test/",
            '/node_modules/': '/base/node_modules/',
            '/app/': '/base/src/app/'
        },


        // list of files to exclude
        exclude: [],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {},


        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['mocha'],


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['PhantomJS'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: true,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity
    })
}
