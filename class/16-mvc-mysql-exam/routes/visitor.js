const express = require('express');
const router = express.Router();
const controller = require('../controller/CVisitor');

router.get('/', controller.getVisitors);
router.get('/:id', controller.getVisitor);
router.post('/', controller.postVisitor);
router.patch('/:id', controller.patchVisitor);
router.delete('/:id', controller.deleteVisitor);

module.exports = router;