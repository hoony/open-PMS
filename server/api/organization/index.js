'use strict';

var express = require('express');
var controller = require('./organization.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/:url', controller.showByUrl);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);

module.exports = router;