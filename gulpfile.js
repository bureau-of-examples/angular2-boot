
///////////////////////// Gulp components /////////////////////////////////
var del = require('del');
var gulp = require('gulp');
var config = require('./gulpfile.config');
var $ = require('gulp-load-plugins')({lazy: true});
var tslint = require('gulp-tslint');
var sass = require('gulp-sass');
var shell = require('gulp-shell');
var glob = require("glob");

///////////////////////// Config //////////////////////////////////////////
var scssPaths = config.styleFolder + '/**/*.scss';

var jsLibs = config.angular2Libs.concat([
    config.srcLibsFolder + '/jquery/jquery.js',
    config.srcLibsFolder + '/foundation/foundation.js'
]);
jsLibs = batchReplace(jsLibs, 'node_modules', config.srcLibsFolder);

console.log('lib paths:');
console.log(jsLibs);

///////////////////////// Tasks ///////////////////////////////////////////
gulp.task('help', $.taskListing);


gulp.task('clean-srcLibs', [], function(done){
    clean([config.srcLibsFolder + '/*'], done);
});


gulp.task('copy-angular2-libs', ['clean-srcLibs'], function(){
    return gulp
        .src(config.angular2Libs, {base: 'node_modules'})
        .pipe(gulp.dest(config.srcLibsFolder));
});


gulp.task('copy-foundation-sites-lib', ['clean-srcLibs'], function(){
    return gulp
        .src(config.foundationSitesLib)
        .pipe(gulp.dest(config.srcLibsFolder + '/foundation'));

});


gulp.task('copy-jquery-lib', ['clean-srcLibs'], function(){

    return gulp
        .src('node_modules/jquery/dist/jquery.js')
        .pipe(gulp.dest(config.srcLibsFolder + '/jquery'));
});


gulp.task('refresh-srcLibs', ['copy-angular2-libs', 'copy-jquery-lib', 'copy-foundation-sites-lib']);


gulp.task('bundle-libs', ['refresh-srcLibs'], function(){
    //todo this bundle is not usable
    return gulp
        .src(jsLibs)
        .pipe($.uglify())
        .pipe($.concat('libs.bundle.js'))
        .pipe(gulp.dest('src/libs'));
});


gulp.task('inject-js', ['bundle-libs'], function(){

    //var jsLibs = ['src/libs/libs.bundle.js'];
    return gulp
        .src('src/index.html')
        .pipe($.inject(gulp.src(jsLibs, {read: false}), {relative: true}))
        .pipe(gulp.dest('src'));
});


gulp.task('clean-scss', [], function(done){
    glob(scssPaths, {}, function(err, files){
        if(err !== null)
            throw err;

        console.log('found scss files:');
        console.log(files);

        var cssFiles = batchReplace(files, '.scss', '.css');
        var mapFiles = batchReplace(files, '.scss', '.css.map');

        clean(cssFiles.concat(mapFiles), done);
    });
});


gulp.task('compile-scss', ['clean-scss'], function(){
    return gulp
        .src(scssPaths)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(config.styleFolder));
});


gulp.task('watch-scss', [], function(){
    gulp.watch(scssPaths, ['compile-scss']);
});


gulp.task('lint-ts', [], function(){

    return gulp
        .src('src/**/*.ts')
        .pipe(tslint({
            rulesDirectory: ["node_modules/ng2lint/dist/src"]
        }))
        .pipe(tslint.report('verbose'));
});


gulp.task('clean-ts', [], function(done){
    glob('src/app/**/*.ts', {}, function(err, files){
        if(err !== null)
            throw err;

        console.log('found ts files:');
        console.log(files);

        var cssFiles = batchReplace(files, '.ts', '.js');
        var mapFiles = batchReplace(files, '.ts', '.js.map');

        clean(cssFiles.concat(mapFiles), done);
    });
});


gulp.task('compile-ts', ['lint-ts'], shell.task(['npm run tsc']));


gulp.task('watch-ts', [], function(){
    gulp.watch(scssPaths, ['compile-ts']);
});

//todo process font and image

gulp.task('serve', ['compile-scss', 'compile-ts', 'inject-js', 'watch-scss', 'watch-ts'], shell.task(['node serve.js']));


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