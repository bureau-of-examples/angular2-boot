(function () {
    // Cancel Karma's synchronous start,
    // we will call `__karma__.start()` later, once all the specs are loaded.
    __karma__.loaded = function () {
    };

    System.config({
        baseUrl: '/base/',
        packages: {
            app: {
                format: 'cjs',
                defaultExtension: 'js'
            }
        }
    });

    Promise.all(
        Object.keys(window.__karma__.files) // All files served by Karma.
            .filter(onlySpecFiles)
            .map(file2moduleName)
            .map(importTestModule)
    ).then(
        function () {__karma__.start();}
    );

    function onlySpecFiles(path) {
        return /[\.|_]spec\.js$/.test(path);
    }

    // Normalize paths to module names.
    function file2moduleName(filePath) {
        return filePath.replace(/\\/g, '/')
            .replace(/^\/base\/src\//, '')
            .replace(/\.js/, '');
    }

    function importTestModule(path) {
        return System.import(path).then(
            function(module){
                if (module.hasOwnProperty('main')) {
                    module.main();
                } else {
                    throw new Error('Module ' + path + ' does not implement main() method.');
                }
            }
        );
    }

}());

