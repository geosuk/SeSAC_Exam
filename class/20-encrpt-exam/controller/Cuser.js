const {User} = require('../models/index');

// 메인 페이지 이동
exports.index = (req, res)=>{
    res.render('index');
}

//