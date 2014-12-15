'use strict';

var express = require('express');
var router = express.Router();
var Maraidb = require('mariasql');

module.exports = function (c) {
  var projectCtrl = require('./project.controller')(c);
  var issueCtrl = require('./issue.controller')(c);

  router.get('/', projectCtrl.index);
  router.get('/:id', projectCtrl.show);

  router.get('/:projectId/issues', issueCtrl.index);
  router.get('/:projectId/issues/:issueId', issueCtrl.show);
  return router;
}