'use strict';

var express = require('express');
var router = express.Router();
var Maraidb = require('mariasql');

module.exports = function (c) {
  var controller = require('./organization.controller')(c);
  router.get('/', controller.index);
  router.get('/:id', controller.show);
  return router;
}