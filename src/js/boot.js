//jQuery(document).foundation();

//monkey patch zone.js monkey patch
(function(A2B$){

    A2B$.rootZone = Zone.current;
    A2B$.gwtZone = Zone.current.fork({name : 'gwt'});
    
    var zoneJsSetTimeout = window.setTimeout;
    window.setTimeout = function() {
        if(!Zone.current || Zone.current.name == 'gwt') {
            return A2B$.window.setTimeout(this, arguments);
        }
        return zoneJsSetTimeout.apply(this, arguments);
    };

    var zoneJsSetInterval = window.setInterval;
    window.setInterval = function() {
        if(!Zone.current || Zone.current.name == 'gwt') {
            return A2B$.window.setInterval(this, arguments);
        }
        return zoneJsSetInterval.apply(this, arguments);
    }

    var zoneJsClearTimeout = window.clearTimeout;
    window.clearTimeout = function() {
        if(!Zone.current || Zone.current.name == 'gwt') {
            return A2B$.window.clearTimeout(this, arguments);
        }
        return zoneJsClearTimeout.apply(this, arguments);
    };

    var zoneJsClearInterval = window.clearInterval;
    window.clearInterval = function() {
        if(!Zone.current || Zone.current.name == 'gwt') {
            return A2B$.window.clearInterval(this, arguments);
        }
        return zoneJsClearInterval.apply(this, arguments);
    };
}(window.A2B$));



//Configure SystemJS
System.config({
    packages: {
        app: {
            format: 'cjs',
            defaultExtension: 'js'
        },
        primeng: {
            format: 'cjs',
            defaultExtension: 'js'
        }
    }
});
System.import('./app/MainComponent').then(null, console.error.bind(console));