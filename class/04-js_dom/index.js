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

const obj = {one: 1, two: 2};
const obj2 = obj;
console.log(obj, obj2);
console.log(obj === obj2); // true

obj.five = 5;
console.log(obj, obj2);
console.log(obj === obj2); // true

// obj와 obj2는 현재 데이터도 같고 참조값 (address, 주소)도 같기 때문이다.

const obj3 = {one:1, two:2};
const obj4 = {one:1, two:2};
console.log(obj3, obj4);
console.log(obj3===obj4); // false

// obj3와 obj4는 현재 데이터가 같지만, 서로 다른 별도의 객체이다.
// 즉, 참조값이 다르기 때문이다.

obj3.five = 5;
console.log(obj3, obj4);
console.log(obj3 === obj4);











