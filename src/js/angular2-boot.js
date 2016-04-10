(function(window){

    var A2B$ = {
        window : {}
    };

    A2B$.window.setTimeout = window.setTimeout;
    A2B$.window.setInterval = window.setInterval;
    A2B$.window.clearTimeout = window.clearTimeout;
    A2B$.window.clearInterval = window.clearInterval;

    window.A2B$ = A2B$;

}(window));
