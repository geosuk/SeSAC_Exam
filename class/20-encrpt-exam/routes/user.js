const express = require('express');
const router = express.Router();
const controller = require('../controller/Cuser');

router.get('/', controller.index);
router.post('/register', controller.register);
router.get('/register', (req, res) => {
    res.render('register');
});
module.exports = router;