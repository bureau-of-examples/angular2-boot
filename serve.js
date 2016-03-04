//serve the web
var liveServer = require("live-server");

var params = {
    port: 3300, // Set the server port. Defaults to 8080.
    host: "0.0.0.0", // Set the address to bind to. Defaults to 0.0.0.0.
    root: "./src", // Set root directory that's being server. Defaults to cwd.
    open: true, // When false, it won't load your browser by default.
    ignore: 'temp,tmp', // comma-separated string for paths to ignore
    ignorePattern:/(.*\.txt|.*\.md)$/ig,//ignore these files
    file: "index.html", // When set, serve this file for every 404 (useful for single-page applications)
    wait: 5000//, // Waits for all changes, before reloading. Defaults to 0 sec.
    //mount: [['/libs', './node_modules']] // Mount a directory to a route.
};

liveServer.start(params);