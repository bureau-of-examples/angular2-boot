//jQuery(document).foundation();

//Configure SystemJS
System.config({
    packages: {
        app: {
            format: 'register',
            defaultExtension: 'js'
        },
        primeng: {
            format: 'cjs',
            defaultExtension: 'js'
        }
    }
});
System.import('./app/MainComponent').then(null, console.error.bind(console));