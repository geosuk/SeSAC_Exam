const fs = require('fs');
const path = require('path');

    // 파일 생성 코드
const filePath = path.join(__dirname, 'demo.txt');
fs.writeFile(filePath, 'Hello, World!', (err) => {
    if (err) {
        return console.error(err);
    }
    console.log('example.txt 파일 생성 완료');
});

