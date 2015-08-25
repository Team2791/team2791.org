var gulp = require("gulp"),
    concat = require("gulp-concat"),
    browserify = require("browserify"),
    reactify = require("reactify"),
    watchify = require("watchify"),
    source = require("vinyl-source-stream"),
    util = require('gulp-util'),
    minifyCss = require("gulp-minify-css");


/*gulp.task("transform", function() {
    gulp.src("")
})*/

gulp.task("browserify", function brfy() {
   

    var bundler = browserify({
        entries: ["app/js/app.js"],
        transform: ["reactify", "babelify"],
        extensions: [".jsx"],
        debug: true,
        cache: {},
        packageCache: {},
        fullPaths: true
    });

    var watcher = watchify(bundler);
    console.log("bfy task running");
    watcher
        .on("update", function watcher() {
            var start = Date.now();
            console.log("Updating!");
            watcher.bundle() // cache for high perf
                .pipe(source("main.js"))
                .pipe(gulp.dest("./app/build/"));
            console.log("Updated!", (Date.now() - start) + "ms");
        })
        .bundle() // initial bundle
        .pipe(source("main.js"))
        .pipe(gulp.dest("./app/build/"));
});

gulp.task("css", function css() {
    gulp.src("styles/**/*.css")
        .pipe(minifyCss({compatibility: "ie8"}))
        // .pipe(concat("main.css"))
        .pipe(gulp.dest("./app/build/"));
});

gulp.task("watch", ["css"], function watchTask() {
    console.log("in watch");
    gulp.watch(
        ["app/css/**/*.css"],
        ["css"]
    );
})

gulp.task("default", ["browserify", "watch"]);
