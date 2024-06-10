// const http = require('http');
// // console.log(http);
// // http 모듈이 가지고 있는 서버 만드는 기능을 사용하기
// const server = http.createServer();
// server.listen(8000, function(){
//     console.log('8000포트에서 서버 실행 중');
// });

const http = require('http');
const server = http.createServer();
server.listen(666, function(){
    console.log('666포트에서 서버 실행 중');
})
