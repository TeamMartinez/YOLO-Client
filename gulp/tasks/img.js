'use strict';

import gulp from 'gulp';
import paths from '../config';

gulp.task('build:img', () => {
  gulp.src([paths.source.img])
  .pipe(gulp.dest(paths.build.img));
});
