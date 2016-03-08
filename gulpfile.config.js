var config = {
    angular2Libs: [
        'node_modules/es6-shim/es6-shim.min.js',
        'node_modules/systemjs/dist/system-polyfills.js',
        'node_modules/angular2/es6/dev/src/testing/shims_for_IE.js',
        'node_modules/angular2/bundles/angular2-polyfills.js',
        'node_modules/systemjs/dist/system.src.js',
        'node_modules/rxjs/bundles/Rx.js',
        'node_modules/angular2/bundles/angular2.dev.js',
        'node_modules/angular2/bundles/router.dev.js',
        'node_modules/angular2/bundles/http.dev.js'
    ],
    foundationSitesLibs: [
        'node_modules/jquery/dist/jquery.js',
        'node_modules/foundation-sites/dist/foundation.js'
    ],
    fontAwesomeFonts: 'node_modules/font-awesome/fonts/*.*',
    srcLibsFolder: './src/libs',
    styleFolder: 'src/assets/style',
    fontsFolder: './src/assets/fonts'
};

config.jsLibs = config.angular2Libs.concat(config.foundationSitesLibs);

module.exports = config;


