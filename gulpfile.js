
var gulp = require("gulp");
var browserify = require("browserify");
var reactify = require("reactify");
var source = require("vinyl-source-stream");

gulp.task("bundle", function () {
    return browserify({
        entries: "./app/main.jsx",
        debug: true
    }).transform(reactify)
        .bundle()
        .pipe(source("main.js"))
        .pipe(gulp.dest("app/dist"))
});

gulp.task("copy", gulp.series("bundle"), function () {
    return gulp.src(["app/index.html","app/lib/bootstrap-css/css/bootstrap.min.css","app/style.css"])
        .pipe(gulp.dest("app/dist"));
});

gulp.task("default",gulp.series("copy"),function(){
   console.log("Gulp completed..."); 
});
gulp.task('serveprod', function() {
    connect.server({
      root: [server.js],
      port: process.env.PORT || 7777, 
      livereload: false
    });
  });