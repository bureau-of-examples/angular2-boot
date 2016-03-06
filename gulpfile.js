
///////////////////////// Gulp components /////////////////////////////////
var del = require('del');
var glob = require("glob");
var gulp = require('gulp');
var config = require('./gulpfile.config');
var $ = require('gulp-load-plugins')({lazy: true});

///////////////////////// Config //////////////////////////////////////////
var scssPaths = config.styleFolder + '/**/*.scss';
var jsLibPaths = batchReplace(config.jsLibs, 'node_modules', config.srcLibsFolder);
var tsPaths = 'src/app/**/*.ts';

///////////////////////// Tasks ///////////////////////////////////////////
gulp.task('default', ['help']);


gulp.task('help', $.taskListing);


gulp.task('clean-srcLibs', [], function(done){
    clean([config.srcLibsFolder + '/*'], done);
});


gulp.task('copy-to-srcLibs', ['clean-srcLibs'], function(){
    return gulp
        .src(config.jsLibs, {base: 'node_modules'})
        .pipe(gulp.dest(config.srcLibsFolder));
});


gulp.task('inject-js', ['copy-to-srcLibs'], function(){

    return gulp
        .src('src/index.html')
        .pipe($.inject(gulp.src(jsLibPaths, {read: false}), {relative: true}))
        .pipe(gulp.dest('src'));
});


gulp.task('clean-scss', [], function(done){
    glob(scssPaths, {}, function(err, files){
        if(err !== null)
            throw err;

        console.log('found scss files:');
        console.log(files);

        var cssFiles = batchReplace(files, '.scss', '.css');
        //map is embedded in css file

        clean(cssFiles, done);
    });
});


gulp.task('compile-scss', ['clean-scss'], function(){
    return gulp
        .src(scssPaths)
        .pipe($.sourcemaps.init())
        .pipe($.sass({}).on('error', $.sass.logError))
        .pipe($.sourcemaps.write())
        .pipe(gulp.dest(config.styleFolder));
});


gulp.task('watch-scss', [], function(){
    gulp.watch(scssPaths, ['compile-scss']);
});


gulp.task('lint-ts', [], function(){

    return gulp
        .src('src/**/*.ts')
        .pipe($.tslint({
            rulesDirectory: ["node_modules/ng2lint/dist/src"]
        }))
        .pipe($.tslint.report('verbose'));
});


gulp.task('clean-ts', [], function(done){
    glob(tsPaths, {}, function(err, files){
        if(err !== null)
            throw err;

        console.log('found ts files:');
        console.log(files);

        var cssFiles = batchReplace(files, '.ts', '.js');
        var mapFiles = batchReplace(files, '.ts', '.js.map');

        clean(cssFiles.concat(mapFiles), done);
    });
});


gulp.task('compile-ts', ['lint-ts'], $.shell.task(['npm run tsc']));


gulp.task('watch-ts', [], function(){
    gulp.watch(tsPaths, ['compile-ts']);
});

//todo process font and image


gulp.task('compile-and-watch-ts', [], $.sequence('compile-ts', 'watch-ts'));


gulp.task('compile-and-watch-scss', [], $.sequence('compile-scss', 'watch-scss'));


//debugging friendly serve
gulp.task('serve', ['compile-and-watch-scss', 'compile-and-watch-ts', 'inject-js'], $.shell.task(['node serve.js']));


//perfromance optimized serve with no watch.
gulp.task('serveP', [/*todo*/], $.shell.task(['node serve.js']));

////////////////////////// Utilities //////////////////////////////////////
function clean(path, done) {
    console.log('Cleaning: ' + $.util.colors.blue(path));
    del.sync(path);
    done();
}

function batchReplace(array, searchvalue, newvalue) {
    var result = [];
    for(var i=0; i<array.length; i++){
        result.push(array[i].replace(searchvalue, newvalue));
    }
    return result;
}