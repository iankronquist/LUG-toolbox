/*jslint node: true */
'use strict';

var express = require('express');
var nunjucks = require('nunjucks');
var bodyParser = require('body-parser');
var knex = require('knex')({
  client: process.env.CLIENT || 'sqlite3',
  connection: process.env.DATABASE_URL || { filename: 'dev.sqlite3' }
});

var app = express();
app.use(express.static(__dirname + '/static'));
// For a possible future API
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('knex', knex);

nunjucks.configure('views', {
  autoescape: true,
  express: app
});

var routes = require('./routes')(app);

app.listen(process.env.PORT || 8000, function () {
  console.log('App now listening on http://localhost:%s', process.env.Port || 8000);
});
