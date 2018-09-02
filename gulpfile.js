var gulp = require('gulp');

// Copy third party libraries from /node_modules into /vendor
gulp.task('vendor', function() {

  // Bootstrap
  gulp.src([
      './node_modules/bootstrap/scss/**/*'
    ])
    .pipe(gulp.dest('./vendor/bootstrap'))

});

// Default task
gulp.task('default', ['vendor']);
