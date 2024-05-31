// 반복문

// // for문
// for(let i = 1; i < 10; i++){
//     console.log('안녕', i);
// }

// // 1~5 출력
// for(let i = 1; i < 6; i++){
//     console.log(i);
// }

// // 5 ~ 1 출력
// for (let i = 5; i > 0; i--){
//     console.log(i);
// }

// 1부터 n까지의 합 구하기
// let sum = 0;
// let n = 10;
// for(let i = 0; i < n + 1; i++){
//     sum = sum + i;
// }
// console.log(sum);

// 1~20 까지 숫자를 반복
// 1 ~ 20 중에서 짝수의 합을 구하시오
// let sum = 0;
// for(let i = 0; i<21; i++){
//     if (i%2==0) {
//         sum = sum+i;
//     }
// }
// console.log(sum);

 //  while 문

//  let idx = 0;
//  while(idx < 10){
//     console.log('안녕', idx);
//     idx = idx+1;
//  }
// 구구단
//  let idx2 = 0;
//  while(true){
//     console.log('안녕', idx2);
//     idx2 = idx2 +1;
//     if(idx2 == 10){
//         break;
//     }
//  }

//  let i = 2, j = 1;
//  while(i < 10){
//     while(j < 10){
//         console.log(i, "x", j, "=", i*j);
//         j++;
//     }
//     i++;
//     j = 1;
//  }

// for 문 구구단
// for(i = 1; i<10; i++){
//     for(j = 1; j<10; j++){
//         console.log(i + 'x' + j + '=' + i*j);

//     }
// }

// do while 문
// let g = 1;
// do{
//     console.log(g);
//     g++;
// }while(g <= 5);

// ex2)
// let number;

// do{
//     number = parseInt(prompt('숫자를 입력하세요 (10보다 큰 숫자)'));
// }while (number >= 11)
// console.log("입력한 숫자: ", number);

// break & continue
//break
// for(let i = 1; i<=10; i++){
//     if(i===5){
//         break;
//     }
//     console.log(i);
// }
// 출력 결과 : 1, 2, 3, 4

//continue
// for(let i = 1; i<=5; i++){
//     if (i ===3){
//         continue;
//     }
//     console.log(i);
// }
// 출력 결과: 1, 2, 4, 5

// let num = Number(prompt('숫자를 입력하세요'));
// for(let i = 1; i <num+1; i++){
//     if(i%2==1 && i%13==0){
//         console.log(i);
//     }
// }
// let sum = 0;
// for(i = 0; i<101; i++){
//     if(i%2===0 || i%5===0){
//         sum+=i;
//     }
// }
// console.log(sum);
