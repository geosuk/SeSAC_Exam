// var http = require('http');
// var url = require('url');
// var fs = require('fs');

// // 127.0.0.1:3000 포트로 접속해서 winter.html, summer.html
// http.createServer((req, res)=>{
//     // req에 사용자가 원하는 파일
//     var q = url.parse( req.url, true);
//     var filename = '.' + q.pathname;
//     fs.readFile(filename, (err, data)=>{
//         if(err){
//             res.writeHead(404,{'Content-Type': 'text/html'})
//             return res.end('찾는 파일이 없습니다');
//         }else{
//             res.writeHead(200, {'Content-Type' : 'text/html'})
//             res.write(data);
//             return res.end();
//         }
//     })
// }).listen(3000, ()=>{
//     console.log('3000포트에서 서버 실행중');
// })

var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer((req, res)=>{
    const q = url.parse(req.url, true);
    const failname = '.' + q.pathname;
    fs.readFile(failname, (err, data)=>{
        if(err){
            res.writeHead(404, {'Content-Type' : 'text/html'});
            return res.end('에러 404');
        }else{
            res.writeHead(200, {'Content-Type' : 'text/html'})
            res.write(data);
            return res.end();
        }
    })
}).listen(8000, ()=>{
    console.log('실행중');
})