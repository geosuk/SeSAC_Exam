console.log(document);
// console.log(document.childNodes[1].childNodes[0]);
console.log(document.head);
console.log(document.body);
console.log(document.title);
console.log(document.URL);
console.log('------------------------------');
// console.log(document.domain);
// 취소선이 그어지는 이유
// - 해당 속성의 사용을 권장하지 않거나, 더 이상 지원되지 않을

//document 객체를 이용해 HTML "요소 선택"
//1. getElementById
console.log(document.getElementById('green')); 
console.log(document.getElementById('red')); 

//2. getElementsByClassName(HTMLCollection)
console.log(document.getElementsByClassName('pink'));
console.log(document.getElementsByClassName('pink')[1]);

// 3. getElementsByTagName(HTMLClooection)
console.log(document.getElementsByTagName('div'));

//4. getElementsByName (NodeList)
console.log(document.getElementsByName('id'));

//5. querySelector(css slelector)
// - 처음 발견한 하나만 가지고 온다.
console.log(document.querySelector('.pink'));
console.log(document.querySelector('.others'));
console.log(document.querySelector('#green'));
console.log(document.querySelector('div'));
console.log(document.querySelector('[name="id"]'));

//6. querySelector(css slelector) (NodeList)
// - 선택자에 해당하는 모든 요소를 선택한다.
console.log(document.querySelectorAll('.pink'));
console.log(document.querySelectorAll('.others'));
console.log(document.querySelectorAll('#green'));
console.log(document.querySelectorAll('div'));
console.log(document.querySelectorAll('[name="id"]'));

console.log(document.querySelectorAll('.pink')[0]);
console.log(document.querySelectorAll('.pink')[1]);
console.log(document.querySelectorAll('.pink')[2]);
console.log(document.querySelectorAll('.pink')[3]);

console.log('-----------------------------------------------');
//* 유사 배열 (HTMLCollection, NodeList)
// [] 식으로 생긴 배열을 의미, 배열은 아니다.
// NodeList -> forEach() 반복문 사용 가능.
document.querySelectorAll('.pink').forEach((elem) => console.log(elem));

//HTMLCollection -> forEach() 메서드 사용 X
Array.from(document.getElementsByClassName('pink')).forEach((elem) => console.log(elem));

// for of 반복문도 가능하다.
const pinks = document.querySelectorAll('.pink');
for(let pink of pinks){
    console.log(pink);
}