const x = 5;
const result = x || 100 ;
console.log(result);

const y = 7
const result3 = x < y && '1';
console.log(result3);

//falsy undefined, null, 0, false, '', NaN
//JavaScript에서 && (AND) 연산자는 첫 번째 피연산자가 true일 경우 두 번째 피연산자의 값을 반환합니다.

// let userColor = 'red';
let userColor = undefined;
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;
console.log(currentColor); 