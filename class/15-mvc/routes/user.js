const express = require('express');
const controller = require('../controller/Cuser');
const router = express.Router();

router.get('/', controller.getUser);

module.exports = router;