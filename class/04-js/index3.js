
// #1.var
var a; // 변수 선언
console.log(a);
a= 2;
console.log(a);
var a2 = 4;
console.log(a2+a);

var a2 = 6;
console.log(a2);

// #2. let
let b;
console.log(b);
b= 7;
console.log(b);

let b2 = 77;
console.log(b2);
// let b2 = 89;

b2= 78;
console.log(b2);



// #3. const
const c = 3;
console.log(c);
// c = 33; error
// var x; << 변수 선언이 자동으로 되는 걸 호이스팅이라고 한다
console.log(x); // undefined
var x = 10;
console.log(x); // 10

// #4.중복선언

var x = 10;
var x = 20;
console.log(x);

// 재선언
var y = 10;
y = 20;
console.log(y);

// 재할당
var x = 10;
x = 20;
console.log(x);