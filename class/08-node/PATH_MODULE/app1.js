//path 모듈
const path = require('path')
console.log(path.join('a','b','index.html'));
console.log(path.join('/a','b','index.html'));
console.log(path.join('/a','b','../index.html'));
console.log(path.join(__dirname, 'data.json'));
//join 과 resolve의 차이
console.log(path.join('a','b','index.html')); // 상대경로
console.log(path.resolve('a','b','index.html')); // 절대경로