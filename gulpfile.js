var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var postcss_import = require('postcss-import');
var postcss_simple_vars = require('postcss-simple-vars');
var cssNano = require('cssnano');

gulp.task('css', function() {
  var plugins = [
      postcss_import,
      postcss_simple_vars,
      autoprefixer
  ];
  return gulp.src('postcss/gorbeh-icons.css')
  .pipe(postcss(plugins))
  .pipe(gulp.dest('css'));
});

gulp.task('mini-css', function() {
  var plugins = [
      postcss_import,
      postcss_simple_vars,
      autoprefixer,
      cssNano
  ];
  return gulp.src('postcss/gorbeh-icons.min.css')
  .pipe(postcss(plugins))
  .pipe(gulp.dest('css'));
});

// default gulp task
gulp.task('default', ['css', 'mini-css'], function() {

  // watch for CSS changes
  gulp.watch('./postcss/*.css', ["css"]);
});
