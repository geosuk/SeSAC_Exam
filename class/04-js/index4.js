// 자료형

//string

let text = '안녕하세요';
let text2 = '하이!';
let gender = '남성';

console.log(text);
console.log(text2);
console.log(text + text2, '야호');

//문자 + 변수를 동시에 쓰고 싶을 때
console.log(text + " 저는 라빌 입니다. 저의 성별은 " + gender + "입니다");

// (ES6) 백틱 (`)와 달러($), 중괄호 ({}) 조합으로 사용한다.

console.log(`${text} 저는 라빌 입니다. 저의 성별은 ${gender} 입니다!`);


//숫자형
let num = 100;
let num2 = 0.12;

console.log(num, num2);
console.log(num + 1); // 101
console.log(num - 1); // 99
console.log(num * 2); // 200
console.log(num / 2); // 50

console.log(num2 + 1); // 1.12

// boolean(논리형)
let isWater = true;
let haveMoney = false;
console.log(isWater, haveMoney); // true, false

// null
let temp = null;
console.log(temp); // null
temp = "hello";
console.log(temp); // hello

// undefined

let x;
console.log(x);

//Array (배열)
const fruits = ['orange', 'pineapple', 'grape', 'apple'];
console.log(fruits);
console.log(fruits[0]); // orange

const mixedArray = [1, 'Damon', true, {name: 'Sean'}, null]; // name: Sean -> 객체
console.log(mixedArray);

// 배열 안에 배열이 들어갈 수 있다.

const korean = [
    ['가', '나', '다'],
    ['라', '마', '바'],
    ['사', '아', '자'],
];
console.log(korean);
console.log(korean[0][0]); // 가

//Q1 '가자' 글씨 출력
console.log(korean[0][0] + korean[2][2]);

//Q2 '사다' 글시 출력
console.log(korean[2][0] + korean[0][2]);

//Q3  3차원 배열에서 숫자 출력
const nums = [
    [
        [1, 2, 3],
        [4, 5, 6],
    ],
    [
        [7, 8, 9],
        [10, 11, 12],
    ],
];
console.log(nums[1][0][1]);

// 객체 (Object) (key: value)

const cat = {
    name: '장화', // "name"이 key, "장화"가 값(value).
    age: 10,
    inCute: true,
    mew: function() {
        return '냐옹';
    },
}
console.log(cat); //object 자체를 출력.

//객체(object)의 속성(key)에 접근하는 방법
//#1. 점 표기법(.)
console.log(cat.name); // 장화
console.log(cat.age); // 10
console.log(cat.mew()); // 냐옹

//#2. 대괄호 표기법([])
console.log(cat['name']); // 장화

//#3. key가 변수에 저장되어 있을 때 사용법
const temVal = 'name';
console.log(cat[temVal]);

// typeof
console.log(typeof '문자'); // string
console.log(typeof 12345); // number
console.log(typeof 3.14); // number
console.log(typeof true); // boolean
console.log(typeof false); // boolean
console.log(typeof null); // object // js의 초기 구현 중 하나로서, null 값을 objet로 분류하는 것은 공식적으로 인정한 언어의 설계상 오류
console.log(typeof undefined); // undefined
console.log(typeof fruits); // object
console.log(typeof cat); // object

// 형변환
//string
let str1 = true;
let str2 = 123;
let str3 = undefined;

console.log(String(str1), typeof String(str1)); // true String
console.log(String(str2), typeof String(str2)); // 123 String
console.log(String(str3), typeof String(str3)); // undefined
console.log(str1.toString(), typeof str1.toString()); // true String
console.log(str1.toString(), typeof str1.toString()); // 123 String
console.log(str1.toString(), typeof str1.toString()); // undefined
// 값을 문자열로 변환

//number
let n1 = true;
let n2 = false;
let n3 = 123.9;
console.log(Number(n1), typeof Number(n1)); // 1, number
console.log(Number(n2), typeof Number(n2)); // 0, number
console.log(Number(n3), typeof Number(n3)); // 123.9 number
console.log(parseInt(n3, 10)); // n3의 값을 10진수의 정수(int)로 바꾸겠다 // 123
console.log(parseFloat(n3)); // n3의 값을 실수(float)로 바꾸겠다. // 123.9

// +) null, undefined를 숫자로 바꾼다면?
console.log(Number(undefined), typeof Number(undefined));
// NaN = Not - A - Number(숫자가 아님)

console.log(Number(null), typeof Number(null)); // 0, number