
//  url 모듈

//  var addr = 'http://localhost:8000/example.htm?year=2024&month=feb';
//  var q = url.parse(addr, true)
// //  console.log(q);
//  console.log(q.pathname);
//  console.log(q.search); // /example.htm  경로 및 파일이름
//  var qdata = q.query; // ?year=2024&month=feb
//  console.log(qdata); // [Object: null prototype] { year: '2024', month: 'feb' }
//  console.log(qdata.month); // feb

const http = require('http');
const url = require('url');
const fs = require('fs');
http.createServer((req, res)=>{
    var q = url.parse(req.url, true);
    var filename = '.' + q.pathname;

    fs.readFile(filename, (err, data)=>{
        if(err){
            res.writeHead(404, {'Content-Type':'text/html'});
            return res.end('404 Not found')
        }
        res.writeHead(200, {'Content-Type':'text/html'})
        res.write(data);
        return res.end();
    })
}).listen(8000, ()=>{
    console.log('8000 서버실행');
})  