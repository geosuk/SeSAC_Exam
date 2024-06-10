//디렉토리 읽기
const fs = require('fs');
// fs.readdir('./', (err, files) => {
//     if(err){
//         console.error(err);
//     }else{
//         console.log('결과는', files);
//     }

// })

// 파일 생성
// fs.writeFile('mynewFile1.txt', 'Hello World', (err)=>{
//     if(err) throw err;
//     console.log('파일이 생성됨');
// })

// open(), w를 이용해서 파일생성
// fs.open('mynewfile2.txt', 'w', (err, file)=>{
//     if(err) throw err;
//     console.log('파일이 생성됨');
// })

// 파일생성 appendFile() 추가, 기존파일을 전제해서
fs.appendFile('demo.txt', "Kim", (err)=>{
    if(err) throw err;
    console.log('파일이 생성됨');
})