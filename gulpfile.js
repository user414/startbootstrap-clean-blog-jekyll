var gulp = require('gulp');

gulp.task('copy', function() {

  // Start Bootstrap Clean Blog JS
  gulp.src([
      'node_modules/startbootstrap-clean-blog/js/clean-blog.min.js',
      'node_modules/startbootstrap-clean-blog/js/jqBootstrapValidation.js'
    ])
    .pipe(gulp.dest('assets/vendor/startbootstrap-clean-blog/js'))

})

// Default task
gulp.task('default', ['copy']);
