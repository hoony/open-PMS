'use strict';

var express = require('express');
var projectCtrl = require('./project.controller');
var updateCtrl = require('./update/update.controller');
var issueCtrl = require('./issue/issue.controller');

var router = express.Router();

router.get('/', projectCtrl.index);
router.get('/:projectUrl', projectCtrl.showByUrl);
router.post('/', projectCtrl.create);
router.put('/:id', projectCtrl.update);
router.patch('/:id', projectCtrl.update);
router.delete('/:id', projectCtrl.destroy);

router.get('/:projectUrl/updates', updateCtrl.index);
router.get('/:projectUrl/updates/:updateId', updateCtrl.show);
router.post('/:projectUrl/updates', updateCtrl.create);
router.put('/:projectUrl/updates/:updateId', updateCtrl.update);
router.patch('/:projectUrl/updates/:updateId', updateCtrl.update);
router.delete('/:projectUrl/updates/:updateId', updateCtrl.destroy);


router.get('/:projectUrl/issues', issueCtrl.index);

module.exports = router;