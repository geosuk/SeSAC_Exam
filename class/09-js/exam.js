
// 1번 문제
// const word1 = "abc";
// const word2 = "xyz";
// const word = [...word1, ...word2];
// console.log(word); 

// 2-1번 문제 

class Shape{
    constructor(width, heigh){
        this.width = width;
        this.heigh = heigh;
    }
    getArea(){
        return this.width * this.heigh;
    }
}
// 2-1-1 직사각형 클래스 만들기
class Rectangle extends Shape{
    constructor(width, heigh){
        super(width, heigh);
    }
    getArea(){
        return Math.sqrt(this.width**2+this.heigh**2);
    }
}
const A = new Rectangle(3, 3);
console.log('대각선의 길이는: ', A.getArea()); 

//2-1-2 삼각형 클래스 만들기

class Triangle extends Shape{
    constructor(width, heigh){
        super(width, heigh);
    }
    getArea(){
        return this.width*this.heigh*0.5;
    }
}

const B = new Triangle(3, 3);
console.log('삼각형의 넓이는 : ',B.getArea() );

//2-1-3 원 클래스 만들기

class Circle extends Shape{
    constructor(width, heigh, radius){
        super (width, heigh);
        this.radius = radius;

        
    }
    getArea(){
        return this.radius**2*Math.PI;
    }
}
const C = new Circle(3, 3, 3);
console.log('원의 넓이는 : ', C.getArea());