const express = require('express');
const router = express.Router();
const controller = require('../controller/Cuser');
// 메인
router.get('/', controller.index);

// 회원가입 라우터
router.post('/register', controller.register);
router.get('/register', (req, res) => {
    res.render('register');
});

// 로그인 라우터
router.post('/login', controller.login);
router.get('/login', (req, res)=>{
    res.render('login');
})

// 회원 목록 라우터
router.get('/profile', (req,res)=>{
    res.render('profile')
});
module.exports = router;