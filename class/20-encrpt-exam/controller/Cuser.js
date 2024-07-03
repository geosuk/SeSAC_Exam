const {User} = require('../models/index');

// 메인 페이지 이동
exports.index = (req, res)=>{
    res.render('index');
}

//회원 가입 처리
exports.register = async(req, res)=> {
    const { userid, pw, name} = req.body;
    try{
        await User.create({ userid, pw, name});
        res.json({result: true});
    }catch(err){
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
}