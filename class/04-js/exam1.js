// 1
const exam ={
    name: '이몽룡',
    girlfreind: {name: '성춘향', age: 16},
    age: 18,
    isMarried: true,
    like: ['강아지','고양이'],

}
console.log(exam);
//2 
let mathScore = Number(prompt('수학점수 입력'));
console.log(typeof mathScore);
let engScore = Number(prompt('영어 점수 입력'));
console.log(typeof engScore);
let avg = (mathScore+engScore)/2;
console.log(avg);

//3

let mathScore2 = "77";
let engScore2 = "88";
let avgScore = (Number(mathScore2) + Number(engScore2))/2;
console.log(avgScore);

