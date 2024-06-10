//파일 삭제
const fs = require('fs');
// fs.unlink('mynewfile2.txt', function(err){
//     if(err) throw err;
//     console.log('파일 삭제 완료');
// })

// 파일 이름변경
fs.rename('demo.txt', 'renamefile1.txt', (err)=>{
    if(err) throw err;
    console.log('파일이름 변경 완료');
})