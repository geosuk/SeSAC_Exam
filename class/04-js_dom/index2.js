// js 표준 내장 객체
// - 기본적으로 미리 정의된 객체
// - 모든 JS 환경에서 사용할 수 있는 내장 객체들을 말한다.
// - 자주 사용되는 기능을 미리 구현해 놓은 것

// #1 Date 객체 : 시간, 날짜

//날짜 생성하여 저장
let now = new Date();
console.log(now);


// new Date(timestamp)
let jan_01_1970 = new Date(0);
console.log(jan_01_1970);

let jan1_01_1970 = new Date(24 * 3600 * 1000);
console.log(jan1_01_1970);

//new Date(date_string)
let date = new Date('2024-06-03');
console.log("date > ", date);

let date2 = new Date('2024', '06', '03'); // MM 월은 0~부터 계산한다. 그러므로 7월이 나옴.
console.log("date2 > ", date2);

// 관련 메서드
// 객체 점 접근법
// getDate(): 월의 몇 번째 날인지 반환한다.

console.log(now.getFullYear()); // 2024
console.log(now.getMonth()); // 5
console.log(now.getDate()); //3
console.log(now.getHours()); // 13
console.log(now.getMinutes()); 
console.log(now.getSeconds());
console.log(now.getMilliseconds());
console.log(now.getDay()); // 0이 일요일부터다.

console.log("-------------------------");
console.log(Math.E); // 자연로그
console.log(Math.PI); // 파이
console.log(Math.SQRT2); // 2의 제곱근


// 메서드 
console.log(Math.min(100, -2, 0, 5)); // 제일 작은 값

// 0~9
console.log(Math.floor(Math.random() * 10));

//0~10
console.log(Math.floor(Math.random() * 11));


//Q1. 1~100
console.log(Math.floor(Math.random() * 100)+1);
//Q2. 20 ~ 22
console.log(Math.floor(Math.random() * 3)+20);

