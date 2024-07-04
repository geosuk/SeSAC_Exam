const express = require('express');
const app = express();
const path = require('path');
const {sequelize} = require('./models');
const dotenv = require('dotenv');
const userRoutes = require('./routes/user');
const session = require('express-session');
dotenv.config({
    path: path.resolve(__dirname, '.env')
})


const port = process.env.PORT;
app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.get('/', (req, res)=>{
    res.render('index');
})
// app.post('/register', (req, res)=>{
//     res.render('register');
// })

app.use('/', userRoutes);

// 로그인 후 해당 파일로 넘어가면

app.get('/profile', (req, res) => {
    console.log(req.session);  // 세션 정보 출력
    if (req.session.user) {
        res.render('profile', { user: req.session.user });
    } else {
        res.redirect('/login');
    }
});

sequelize.sync({force : false}).then(()=>{
    app.listen(port, ()=>{
        console.log(`Server is running! Port number is ${port} ...`);
    });
}).catch((err)=>{
    console.error(err);
});