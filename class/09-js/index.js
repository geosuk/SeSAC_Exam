// 구조를 분해해서 어딘가에 다시 할당한다
// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = ['a', 'b', 'c'];
// const a = arr1;
// console.log(a);
// const [five, two, three, four, one] = arr1;
// console.log(one, two, three, four, five);

// const [x, y, z, alpha] = arr2;
// console.log(x, y, z, alpha);

let num1 = 1;
let num2 = 2;
//변수 값의 교환, 2개의 변수값을 교환할 때 제3의 변수를 사용했어야 했다. 지금은 그럴 필요가 없음
console.log('Before : ' ,num1, num2);
[num2, num1] = [num1, num2];
console.log('After : ' , num1, num2);


//
let lists = ['apple', 'grape'];
[f1, f2, f3='orange'] = lists;
console.log(f1, f2, f3);

// 객체, object : key와 value로 이루어진 값
const obj = {
    title : '엘리먼트', 
    content : 'fun',
    num : 5
}
console.log(obj.num);
console.log(obj.content);
console.log(obj.title);
console.log(obj['title']);
console.log(obj['content']);
console.log(obj['num']);

//객체 구조 분해, 디폴트 값을 넣을 수 잇따.
const {num, title, content, star = 1000} = obj;
console.log(num, title, content, star);

const{a1, b1, c1} = obj; // 같은 이름을 사용해야 한다
console.log(a1, b1, c1); // 결과는 undefined

// undefined : 변수는 할당되었지만 값이 할당되지 않은 것

const lectureInfo = {
    name : 'Coding on',
    part : 'web',
    leader : 'Kim',
}

// console.log(lectureInfo);
function getInfo(lecture){
    const {name, part, leader} = lecture;
    const output = `${name} 강의는 ${part} 개발을 공부합니다. 수업의 리더는 ${leader} 입니다`;
    return output;
}

const result = getInfo(lectureInfo);
console.log(result);