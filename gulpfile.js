
///////////////////////// Gulp components /////////////////////////////////
var del = require('del');
var glob = require("glob");
var gulp = require('gulp');
var config = require('./gulpfile.config');
var $ = require('gulp-load-plugins')({lazy: true});
var yargs = require('yargs');

///////////////////////// Config //////////////////////////////////////////
var scssPaths = config.styleFolder + '/**/*.scss';
var jsLibPaths = batchReplace(config.jsLibs, 'node_modules', config.srcLibsFolder);
var tsPaths = 'src/app/**/*.ts';
var browserSupport = ['> 5%'];

///////////////////////// Tasks ///////////////////////////////////////////
gulp.task('default', ['help']);


gulp.task('help', $.taskListing);


gulp.task('clean-srcLibs', [], function(done){
    clean([config.srcLibsFolder + '/*'], done);
});


gulp.task('copy-to-srcLibs', ['clean-srcLibs'], function(){
    return gulp
        .src(config.jsLibs.concat(config.jsMaps), {base: 'node_modules'})
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


gulp.task('clean-fonts', [], function(done){
    clean([config.fontsFolder + '/*.*'], done)
});


gulp.task('copy-fonts', ['clean-fonts'], function(){
    return gulp
        .src(config.fontAwesomeFonts)
        .pipe(gulp.dest(config.fontsFolder));
});


var preCompileScssTasks = ['clean-scss', 'copy-fonts'];

gulp.task('compile-scss', preCompileScssTasks, function(){

    return compileScss(false);
});

gulp.task('compile-scssP', preCompileScssTasks, function(){

    return compileScss(true);
});


function compileScss(production){
    var prefixer = $.autoprefixer({browsers: browserSupport, cascade: false});
    var cassOptions = production ? {outputStyle: 'compressed'} : {};
    var generateSourcemap = !production || yargs.argv.sourcemap;

    return gulp
        .src(scssPaths)
        .pipe($.if(generateSourcemap, $.sourcemaps.init()))
        .pipe($.sass(cassOptions).on('error', $.sass.logError))
        .pipe(prefixer)
        .pipe($.if(generateSourcemap, $.sourcemaps.write()))
        .pipe(gulp.dest(config.styleFolder));
}


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


gulp.task('bundle-libs', ['copy-to-srcLibs'], function(){
    return gulp
        .src(jsLibPaths.slice(1)) //es6-shim must load separately otherwise script error in Chrome
        .pipe($.plumber())
        .pipe($.if(yargs.argv.sourcemap, $.sourcemaps.init()))
        .pipe($.concat('libs.bundle.js'))
        .pipe(gulp.dest(config.srcLibsFolder))
        .pipe($.rename('libs.bundle.min.js'))
        .pipe($.uglify())
        .pipe($.if(yargs.argv.sourcemap, $.sourcemaps.write()))
        .pipe(gulp.dest(config.srcLibsFolder));
});


gulp.task('inject-libs-bundle', ['bundle-libs'], function(){
    return gulp
        .src('src/index.html')
        .pipe($.inject(gulp.src([jsLibPaths[0], './src/libs/libs.bundle.min.js'], {read: false}), {relative: true}))
        .pipe(gulp.dest('src'));
});


//perfromance optimized serve with no watch.
gulp.task('serveP', ['compile-scssP', 'inject-libs-bundle'], $.shell.task(['node serve.js']));


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