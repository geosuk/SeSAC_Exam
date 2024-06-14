const express = require('express');
const app = express();
const PORT = 8000;
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));


app.get('/', (req, res)=>{
    res.render('index', {title : 'Home'});
})
app.get('/about', (req, res)=>{
    res.render('about', {title : 'about'});
})
app.get('/create', (req, res)=>{
    res.render('create', {title : 'create'});
})
//지정된 경로외 경로일때
app.use((req, res)=>{
    res.status(404).render('404');
})
app.listen(PORT, ()=>{
    console.log('8000 실행중');
})