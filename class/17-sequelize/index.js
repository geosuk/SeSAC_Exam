const express = require('express');
const app = express();
const PORT = 8000;
const router = require('./routes/index');
const {sequelize} = require('./models'); // 해당 폴더의 index파일
app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.urlencoded({extended: true}));
app.use(express.json());
// Meterial Icon 설치
app.use('/', router);

sequelize
    // force: true; 서버 실행 할때마다 테이블을 재 생성
    // force: false; 서버 실행 시 테이블이 없으면 생성하겠다.
    .sync({force : false})
    .then(()=>{
        app.listen(PORT, ()=>{
        console.log('Database connection succeeded!');
        console.log(`Server is running! Port number is ${PORT} ...`);
    });
}).catch((err)=>{
    console.error(err);
});
