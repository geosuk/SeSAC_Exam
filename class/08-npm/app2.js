const http = require('http');
http.createServer(function(req, res){
    var _url = req.url;
    res.writeHead(200,{'Content-Type':'text/html; charset=UTF-8'} );
    res.write("<h2>Hello</h2>");
    res.end(`<p> ${_url} </p>`);
}).listen(8000, ()=>{
    console.log('서버 실행');
})