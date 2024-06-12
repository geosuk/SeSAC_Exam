// spread 연산자 ... 
const a = [1, 2, 3];
const b = [4, 5];

const spread = [...a, ...b];
console.log(spread);

const c = [...'Hello'];
console.log(c);

//기존의 방식
const d = 'Hello'.split('');
console.log(d);


//spread 연산자를 object에 사용
const chip = {
    base: 'chip',
    company: 'lotte'
};
const potatoChip = {
    ...chip,
    flavor: 'potato'
};
console.log(potatoChip);

// ---------------------------
// rest 파라미터
// 함수에서 사용시
const values = [10, 20 , 30 , 40 , 50 , 60];
function get(a, b, ...rest){
    console.log(a, b,); // 순서대로 a, b 만 호출하고
    console.log(rest); // 나머지 호출
}
get(...values);

// -------------
const icecream = {
    company : 'lotte',
    flavor : 'choco',
    price: 1000
};

const{flavor, ...rest} = icecream;
// console.log(flavor);
// console.log(rest);

// --- 배열
const number = [1, 2, 3, 4, 5, 6, 7, 8];
const [one1, two1, ...rest2] = number;
console.log(one1, two1);
console.log(rest2);