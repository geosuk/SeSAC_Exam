const express = require('express');
const router = express.Router();
const controller = require('../controller/Cmain');
router.get('/', controller.index);

module.exports = router;