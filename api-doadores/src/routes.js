'use strict'

const express = require('express');7
const router = express.Router();
const controller = require('../src/controller');



router.post('/api/doador', controller.post);
router.put('/api/doador/:id', controller.put);
router.get('/api/doador/', controller.get);
router.get('/api/doador/:id', controller.getById);
router.delete('/api/doador/', controller.delete);






module.exports = router;