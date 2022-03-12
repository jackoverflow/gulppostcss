var gulp = require('gulp');
var postcss = require('gulp-postcss');
var cssnext = require('postcss-cssnext');
var shortcss = require('postcss-short');

gulp.task('css', function() {
  var plugins = [
    shortcss,
    cssnext
  ];
  return gulp.src('initial/*.css')
  .pipe(postcss(plugins))
  .pipe(gulp.dest('final'));
});