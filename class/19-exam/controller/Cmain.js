const {User} = require('../models/index');
const { Op } = require('sequelize');
// 메인 페이지 이동
exports.index = (req, res)=>{
    res.render('index');
}

// 로그인 조회 메서드
exports.getUserList = async (req, res)=>{
    try{
        
        const {id, pw} = req.pody;
        const user = await User.findAll({
          where: {
            [Op.and]: [{user_id: id }, { user_pw: pw }],
          },
          
        });
        res.json(user);
        console.log('유저 ->', user);
        if(user){
            return res.render('login')
        }else{
            return res.send(false)
        }
    }catch(err){
        console.error(err);
        res.status(500).send('Server Error');
    }
}