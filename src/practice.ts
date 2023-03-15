
// interface 사용해보기
// Shape 라는 interface 를 선언한다.
interface Shape {
    getArea(): number; // Shape interface 에는 getArea 라는 함수가 꼭 있어야 하며 해당 함수의 반환값은 숫자다.
  }
  
  class Circle implements Shape {
    // `implements` 키워드를 사용하여 해당 클래스가 Shape interface 의 조건을 충족하겠다는 것을 명시한다.
  
    radius: number; // 멤버 변수 radius 값을 설정한다.
  
    constructor(radius: number) {
      this.radius = radius;
    }
  
    // 너비를 가져오는 함수를 구현한다.
    getArea() {
      return this.radius * this.radius * Math.PI;
    }
  }
  
  class Rectangle implements Shape {
    width: number;
    height: number;
    constructor(width: number, height: number) {
      this.width = width;
      this.height = height;
    }
    getArea() {
      return this.width * this.height;
    }
  }
  
  const shapes: Shape[] = [new Circle(5), new Rectangle(10, 5)];
  
  shapes.forEach(shape => {
    console.log(shape.getArea());
  });
/*
↑ 위에 작성한 코드를 보면 
 width: number;
  height: number;
  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }
이런식으로 width, height 멤버 변수를 선언한 다음에 constructor 에서 해당 값들을 하나 하나 설정해주었는데,
타입스크립트 에서 constructor 의 파라미터 쪽에 public 또는 private accessor 를 사용하면 직접 하나하나 설정해주는 작업을 생략해줄 수 있다.
*/


/*
// 함수에서 타입 정의하기

function sumArray(numbers: number[]): number {
    return numbers.reduce((acc, current) => acc + current, 0);
  }
  
  const total = sumArray([1, 2, 3, 4, 5]);
// 타입스크립트를 사용했을때 편리한점은, 배열의 내장함수를 사용 할 때에도 타입 유추가 매우 잘 이루어진다.
// 참고로 함수에서 만약 아무것도 반환하지 않아야 한다면 이를 반환 타입을 void 로 설정하면된다.
*/

/*
function sum(x: number, y: number): number {
    return x + y;
  }
  
  sum(1, 2);
// 타입스크립트를 사용하면 다음과 같이 코드를 작성하는 과정에서 함수의 파라미터로 어떤 타입을 넣어야 하는지 바로 알 수 있다.
// ↑위 코드의 첫번째 줄의 가장 우측을 보면 : number 가 있는데, 이는 해당 함수의 결과물이 숫자라는것을 명시한다.
*/

/*
// 기본타입연습
let count = 0; // 숫자
count += 1;
count = '갑자기 분위기 문자열'; // 이러면 에러가 난다!

const message: string = 'hello world'; // 문자열

const done: boolean = true; // 불리언 값

const numbers: number[] = [1, 2, 3]; // 숫자 배열
const messages: string[] = ['hello', 'world']; // 문자열 배열

messages.push(1); // 숫자 넣으려고 하면 안된다!

let mightBeUndefined: string | undefined = undefined; // string 일수도 있고 undefined 일수도 있다
let nullableNumber: number | null = null; // number 일수도 있고 null 일수도 있다

let color: 'red' | 'orange' | 'yellow' = 'red'; // red, orange, yellow 중 하나다
color = 'yellow';
color = 'green'; // 에러 발생!

TypeScript 를 사용하면 이렇게 특정 변수 또는 상수의 타입을 지정 할 수 있고 사전에 지정한 타입이 아닌 값이 설정 될 때 바로 에러를 발생시킨다.
↑ 위에처럼 에러가 나타났을땐 컴파일이 되지 않는다.
*/

/*
const message: string = 'hello world';
console.log(message);
*/