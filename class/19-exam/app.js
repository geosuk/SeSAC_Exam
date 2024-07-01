const express = require('express');
const app = express();
const path = require('path');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const {sequelize} = require('./models')
const dotenv = require('dotenv');
dotenv.config({
    path: path.resolve(__dirname, '.env')
})

const port = process.env.PORT;
app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', (req, res)=>{
    res.render('index');
})
app.get('/login', (req, res)=>{
    
})
sequelize.sync({force : false}).then(()=>{
    app.listen(port, ()=>{
        console.log(`Server is running! Port number is ${port} ...`);
    });
}).catch((err)=>{
    console.error(err);
})