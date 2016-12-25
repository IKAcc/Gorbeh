var gulp = require('gulp');
var postcss = require('gulp-postcss');
var postcss_simple_vars = require('postcss-simple-vars');

gulp.task('css', function() {
  var plugins = [
    postcss_simple_vars,
  ];
  return gulp.src('postcss/gorbeh-icons.css')
  .pipe(postcss(plugins))
  .pipe(gulp.dest('css'));
});

// default gulp task
gulp.task('default', ['css'], function() {

  // watch for CSS changes
  gulp.watch('./postcss/*.css', ["css"]);
});
