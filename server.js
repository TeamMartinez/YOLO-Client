'use strict';

var path = require('path');
var express = require('express');

const app = express();

app.use('/', express.static('dist'));

app.use('/*', function(req, res){
  res.sendFile(path.join(__dirname, 'dist', 'index.html'))
});

module.exports =  app;
