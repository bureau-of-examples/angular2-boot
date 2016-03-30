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
        'node_modules/primeui/primeui-ng-all.js',
        'node_modules/foundation-sites/dist/foundation.js',
        'node_modules/jsog/lib/JSOG.js',
        'node_modules/toastr/toastr.js',
        'node_modules/chart.js/Chart.js'
    ],
    jsMaps: [
        'node_modules/systemjs/dist/system-polyfills.js.map',
        'node_modules/es6-shim/es6-shim.map'
    ],
    fontAwesomeFonts: 'node_modules/font-awesome/fonts/*.*',
    primeuiImages: 'node_modules/primeui/themes/delta/images/*.*',
    primengFiles: 'node_modules/primeng/**/*.*',
    srcLibsFolder: './src/libs',
    styleFolder: 'src/assets/style',
    fontsFolder: './src/assets/fonts',
    imagesFolder: './src/assets/images',
    primengFolder: './src/primeng'
};

config.jsLibs = config.angular2Libs.concat(config.foundationSitesLibs);

module.exports = config;


