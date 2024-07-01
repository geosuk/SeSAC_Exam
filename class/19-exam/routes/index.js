const express = require('express');
const router = express.Router();
const controller = require('../controller/Cmain');
// 메인페이지 이동
router.get('/', controller.index);
// 로그인 메서드
router.get('/login', controller.User);

module.exports = router;