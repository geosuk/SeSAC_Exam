const http = require('http');
http.createServer(function(req,res){
    res.writeHead(200, {'Content-Type':'text/html; charset=UTF-8'});
    res.end(`<h2>hello 서거석</h2>`);
}).listen(3000);