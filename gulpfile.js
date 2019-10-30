const gulp = require("gulp");
const sass = require("gulp-sass");
const browserSync = require("browser-sync").create();

//compile scss into css

function style() {
  return gulp
    .src("./public/styles/scss/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./public/styles/css"))
    .pipe(browserSync.stream());
}

function watch() {
  browserSync.init({
    server: {
      baseDir: "public/"
 //     index: "contact.html"
    }
  });
  gulp.watch("./public/styles/scss/**/*.scss", style);
  gulp.watch("./public/*.html").on("change", browserSync.reload);
  gulp.watch("./public/scripts/*.js").on("change", browserSync.reload);
}

exports.style = style;
exports.watch = watch;
