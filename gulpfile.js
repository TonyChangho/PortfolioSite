var gulp = require("gulp");

var htmlMin = require('gulp-htmlmin');
var sass = require("gulp-sass");
var cleanCSS = require('gulp-clean-css');

var dist = "dist/";


gulp.task(
    "styles",
    function() {
        gulp.src("*.*css")
            .pipe(sass())
            .pipe(cleanCSS())
            .pipe(gulp.dest(dist));
    });

gulp.task(
    "images",
    function() {
        gulp.src("images/*")
            .pipe(gulp.dest(dist + "images/"));
    }
);

gulp.task("html", function() {
    gulp.src("*.html")
        .pipe(htmlMin({ collapseWhitespace: true }))
        .pipe(gulp.dest(dist));
});


gulp.task("default", ["styles", "images", "html"]);
