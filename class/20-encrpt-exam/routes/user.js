const express = require('express');
const router = express.Router();
const controller = require('../controller/Cuser');

router.get('/', controller.index);
router.post('/register', controller.register);
router.get('/register', (req, res) => {
    res.render('register');
});
router.post('/login', controller.login);
router.get('/login', (req, res)=>{
    res.render('login');
})
module.exports = router;