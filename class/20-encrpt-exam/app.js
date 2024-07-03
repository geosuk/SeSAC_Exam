const express = require('express');
const app = express();
const path = require('path');
const {sequelize} = require('./models');
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

sequelize.sync({force : false}).then(()=>{
    app.listen(port, ()=>{
        console.log(`Server is running! Port number is ${port} ...`);
    });
}).catch((err)=>{
    console.error(err);
});