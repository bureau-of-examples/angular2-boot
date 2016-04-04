
// Cancel Karma's synchronous start,
// we will call `__karma__.start()` later, once all the specs are loaded.
__karma__.loaded = function() {};

System.config({
    baseUrl: '/base/',
    packages: {
        test: {
            format: 'cjs',
            defaultExtension: 'js'
        },
        app: {
            format: 'cjs',
            defaultExtension: 'js'
        }
    }
});

Promise.all([
    System.import('./test/unit-test.spec'),
    System.import('./app/services/UtilService.spec')
]).then(function() {
    __karma__.start();
});
