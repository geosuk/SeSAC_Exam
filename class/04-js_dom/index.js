//변수 or (함수 매개변수)가 전달될 때,
// 값 또는 참조가 어떻게 전달되는지

// #1. pass by value (값에 의해 전달)
// - 원시 타입(primitive type)은 값(value)이 복사되어 전달된다.

let num = 1;
let num2 = num;
console.log(num, num2);// 1 1
console.log(num === num2);// true

num = 5; // 1 -> 5
console.log(num, num2); // 5 1 
console.log(num === num2); // false

function changeValue(x){
    x = 10;
    console.log('x > ', x);
}
changeValue(num);