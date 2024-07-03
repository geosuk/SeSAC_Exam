
const { log } = require('console');
const express = require('express');
const app = express();
// 'http' 모듈은 HTTP 서버와 클라이언트 기능을 제공.
const http = require('http');
// 'socket.io' 모듈 불러오기
// WebSocket 기반, 실시간 양방향 데이터 전송 지원 라이브러리.
const socketIO = require('socket.io');
// express 애플리케이션 기반으로 HTTP 서버 생성
const server = http.createServer(app);
// HTTP 서버 'server'를 'socket.io'에 바인딩하여 WebSocket 기능을 추가한 서버를 생성
// 이러면 클라이언트 - 서버 간에 실시간 양방향 통신을 할 수 있다.
const io = socketIO(server);
const PORT = 8000;


app.set('view engine', 'ejs');
app.get('/', (req, res)=>{
    res.render('client');
})

// [실습 3-2-1]
// 사용자 닉네임 모음 객체
const nickObjs = {};

//io.on() : socket 관련한 통신 작업을 처리
io.on('connection', (socket)=>{
    // connection 이벤트는 클라이언트가 접속 했을 때 발생
    console.log('서버 연결 완료 :: ', socket.id);
    // socket.id : 소켓 고유 아이디(브라우저 탭 단위로 다르다.)
    //(참고) 소켓 연결 완료.

    // [실습 1]
    // socket.on('hello', (data)=>{
    //     console.log(data);
    //     console.log(`${data.who} : ${data.msg}`);
    //     socket.emit('hellokr', {who: 'hello', msg: '안녕'});
    // })

    // socket.on('study', (data)=>{
    //     socket.emit('studykr', {who: 'study', msg: '난 학생이야!'});
    // })

    // socket.on('bye', (data)=>{
    //     socket.emit('byekr', {who: 'bye', msg: '바이바이 !'});
    // })

    // [실습 3] 채팅창 입장 안내 문구
    io.emit('notice', `${socket.id} 님이 입장하셨습니다.`);

    // [실습 3-2] coxldckd dlqwkd ansrn
    // emit() from server
    // - socket.emit(event_name, data) : 해당 클라이언트에게만 이벤트, 데이터를 전송.
    // - io.emit(event_name, data): 서버에 접속된 모든(all) 클라이언트 전송
    // - io.to(소켓아이디).emit(event_name, data) : 소켓 아이디에 해당하는 클라이언트 에게만 전송. (귓속말)

    socket.on('setNick', (nick)=>{
        console.log(`닉네임 설정 완료 :: ${nick} 님 입장`);

        // [실습 3-2-1]
        // 프론트에서 입력한 nick이 nickO
    })
})

server.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}`);
})