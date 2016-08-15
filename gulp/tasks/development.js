import gulp        from 'gulp';
import runSequence from 'run-sequence';

gulp.task('dev', ['clean'], (cb) => {
  global.isProd = false;

  runSequence(['styles', 'images', 'fonts', 'views'], 'browserify', 'watch', cb);
});
