'use strict';

export default {
  build: {
    css: './dist/css',
    img: './dist/img',
    js: './dist/js',
    jsMain: './dist/js/main.js',
    dir: './dist',
  },

  source: {
    css: [
      './app/css/**/*.css',
      './node_modules/react-select/dist/react-select.min.css',
      './node_modules/react-bootstrap-datetimepicker/css/bootstrap-datetimepicker.min.css',
    ],
    img: './app/img/*.*',
    jsMain: './app/js/app.jsx',
    scripts: './app/js/**/*.@(js|jsx)',
    html: './app/index.html',
  },
};
