'use strict';

import notify from 'gulp-notify';

export default function handleErrors(...args) {
  notify.onError({
    title: 'Compile Error',
    message: '<%= error.plugin %>: <%= error.message %>',
  }).apply( this, args);
  this.emit('end');
}
