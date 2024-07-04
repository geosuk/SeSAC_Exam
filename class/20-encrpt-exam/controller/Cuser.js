const {User} = require('../models/index');
const bcrypt = require('bcrypt');
// 메인 페이지 이동
exports.index = (req, res)=>{
    res.render('index');
}

//회원 가입 처리
exports.register = async (req, res) => {
    const { userid, pw, name } = req.body;
    try {
        const hashedPw = await bcrypt.hash(pw, 10);
        await User.create({ userid, pw: hashedPw, name });
        res.json({ result: true });
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
};

//로그인 처리
exports.login = async (req, res) => {
    const { userid, pw } = req.body;
    console.log('Login attempt:', userid, pw); // 로그인 시도 로그 추가
    try {
        const user = await User.findOne({
            where: { userid }
        });
        if (user) {
            console.log('User found:', user); // 사용자 찾기 성공 로그
            const isMatch = await bcrypt.compare(pw, user.pw);
            if (isMatch) {
                console.log('Password match'); // 비밀번호 일치 로그
                res.send({result:true, user});
            } else {
                console.log('Password mismatch'); // 비밀번호 불일치 로그
                res.status(401).send('로그인 실패!');
            }
        } else {
            console.log('User not found'); // 사용자 찾기 실패 로그
            res.status(401).send('로그인 실패!');
        }
    } catch (err) {
        console.error('Internal Server Error:', err); // 에러 로그 추가
        res.status(500).send('Internal Server Error');
    }
};