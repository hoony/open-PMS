'use strict';

var express = require('express');
var projectCtrl = require('./project.controller');
var updateCtrl = require('./update/update.controller');
var issueCtrl = require('./issue/issue.controller');

var router = express.Router();

router.get('/', projectCtrl.index);
router.get('/:projectUrl', projectCtrl.showByUrl);
router.post('/', projectCtrl.create);
router.put('/:projectUrl', projectCtrl.update);
router.patch('/:projectUrl', projectCtrl.update);
router.delete('/:projectUrl', projectCtrl.destroy);

router.get('/:projectUrl/updates', updateCtrl.index);
router.get('/:projectUrl/updates/:updateId', updateCtrl.show);
router.post('/:projectUrl/updates', updateCtrl.create);
router.put('/:projectUrl/updates/:updateId', updateCtrl.update);
router.patch('/:projectUrl/updates/:updateId', updateCtrl.update);
router.delete('/:projectUrl/updates/:updateId', updateCtrl.destroy);

router.get('/:projectUrl/issues', issueCtrl.index);
router.get('/:projectUrl/issues/:issueId', issueCtrl.show);
router.post('/:projectUrl/issues', issueCtrl.create);
router.put('/:projectUrl/issues/:issueId', issueCtrl.update);
router.patch('/:projectUrl/issues/:issueId', issueCtrl.update);
router.delete('/:projectUrl/issues/:issueId', issueCtrl.destroy);


module.exports = router;