'use strict';

import gulp from 'gulp';
import concat from 'gulp-concat';
import paths from '../config';

gulp.task('build:css', () => {
  gulp.src(paths.source.css)
    .pipe(concat('main.css'))
    .pipe(gulp.dest(paths.build.css));
});
