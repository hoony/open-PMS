/**
 * Main application file
 */

'use strict';

// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('express');
var Mariasql = require('mariasql');
var mongoose = require('mongoose');
var config = require('./config/environment');

// Connect to mongodb
mongoose.connect(config.mongo.uri, config.mongo.options);

// Connect to mariadb

var c = new Mariasql();
c.connect(config.mariadb);
c.on('connect', function () {
  console.log('Mariadb is connected!');
})
.on('error', function (err) {
  console.log('There is an error while connecting Mariadb.');
  console.log(err);
})

// Setting database
require('./config/db/db')(c, config);

// Setup server
var app = express();
var server = require('http').createServer(app);
require('./config/express')(app);
require('./routes')(app, c);

// Start server
server.listen(config.port, config.ip, function () {
  console.log('Express server listening on %d, in %s mode', config.port, app.get('env'));
});

// Expose app
exports = module.exports = app;