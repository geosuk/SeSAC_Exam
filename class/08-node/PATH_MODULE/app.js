/**
 * path.join(): 여러인자를 넣으면 하나의 경로로 합쳐준다
 * path.resolve(): path.join() 과 비슷하지만 약간의 차이가 있다
 * path.parse(): 파일경로를 root, dir, base, ext, name 으로 구분한다.
 * path.format(): path.parse() 한 객체를 파일경로로 합친다
 */
const path = require('path');
// console.log(abc);
console.log(path.basename(__dirname)); // 현재 폴더명
console.log(path.basename(__filename)); // 현재 파일명
console.log(path.join('a', 'b', 'index.html')); // a\b\index.html
console.log('---------------');
let pathname = path.parse('/home/user/dir/file.txt'); // root, dir, base, ext, name
console.log(pathname);
console.log('---------------');
console.log(path.extname('/home/user/dir/file.txt')) // 확장자명
console.log(path.basename('/home/user/dir/file.txt')) // 파일명