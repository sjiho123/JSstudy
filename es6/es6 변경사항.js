// es2015가 등장하기 전까지는 변수를 선언하기 위해 var키워드르 주로 사용했다. var키워드는 이름이 같은 변수를 중복선언해도 오류가 발생하ㅣㅈ 않는다
// 또한 블록단위의 스코프를 지원하지않는다. var키워드는 함수단위의 스코프만 지원한다. {}로 묶여진 블록 내에서 선언한 변수는 별도의 스코프를 만들지 않는다는 것을 의미한다
// es2015에서는 이러한 문제를 해결하기 위해 let 키워드를 지원하낟. 블록단위의 스코프도 해결했고, 변수의 중복 선언을 방지할수있다
// const는 상수 기능을 제공한다 즉 한번 값이 주어지면 다시 변경할수 없다 const또한 블록 스코프를 제공한다.
// 기존 var 키워드는 중복 선언을 허용한다 즉 아래 코드는 오류를 일으키지 않는다.

var a = 100;
var a = 'hello';
var a = {name: '홍길동' , age : 20};

// 반면 let과 const는 중복 선언을 허용하지 않는다. 위 코드에서 var를 let으로 변경하면 오류가 발생한다

// 기본파라미터와 가변 파라미터

// ES2015에서는 기본 파라미터를 이용해 함수 파라미터의 기본값을 지정할 수 있다 . 예제를 통해 확인해보자

function addContact(name, mobile, home= '없음', address=  '없음', email='없음',  ) {
    var str = `name=${name}, mobile=${mobile}, email=${email}`;
    console.log(str);
}

addContact('홍길동', 010-222-3331);
adContact('이몽룡', -010-222-3332, '02-3322-9900', '서울시');

// addContact 함수의 home,address,email 파라미터는 값을 전달하지 않을 경우 주어진 기본값이 할당된다. 위 코드의 경우는 각각없음이라는 기본값이 할당된다.

// 가변파라미타(Rest Parameter)는 여러개의 파라미터값을 배열로 받을 수 있도록 한다. 전달하느 ㄴ파라미터의 갯는 가변적으로 적용할 수 있다.

function foodReport(name, age, ...favoriteFoods) {
    console.log(name+ ", " + age);
    console.log(favoriteFoods);
}

foodReport("이몽룡" , 20 , "짜장면" , "냉면" , "불고기");
foodReport("홍길동", 16, "초밥");

// 파라미터 앞 부분이 ...으로 시작하는 favortieFoods가 가변 파라미터이다. 함수 호출시 가변파라미터가 주어진 3번째 부터 주어진 인자들은 favoriteFoods에 배열 형태로 전달된다.


// 구조분해 할당(destructuring assignment) 
// ES2015에서는 배열 객체의 값들을 추출하여 여러 변수에 할당할 수 있는 기능을 제공한다. 예제를 살펴보자.

let arr = [10,20,30,40];
let [a1,a2,a3] = arr;

console.log(a1,a2,a3);

let p1 = {name:'홍길동' , age: 20 , gender : 'M'};
let {name:n , age:a, gender} = p1;
console.log(n , a, gender);

// 2행은 arr의 배열 값을 순서대로 a1,a2a3변수에 각각 10,20,30을 할당한다. 6행의 코드에서는 p1객체의 name 속성을 변수 n 에 할당하고 p1.age를 변수 a에 할당한다
// p1 객체의 속성과 할당하려는 변수의 이름이 동일할 때는 변수명을 생략할 수 있다.

// 구조분해 할당은 함수의 파라미터에서도 사용할 수 있다.

function addContact({name, phone,email="없음" , age=0}) {
    console.log('이름 :' + name);
    console.log('전번 : ' + phone);
    console.log('메일 : ' +email);
    console.log('나이: ' + age);
}

addContact({
    name : "이몽룡",
    phone: "010-3434-8989"
})

// 위 예제는 구조분해 할당과 기본파라미터를 함께 사용했다.  addContact 함수를 호출할때 자바스크립트 객체를 파라미터 값으로 전달하고 있다.
// 전달된 객체는 구조분해를 할당을 수행한다. 기본 파라미터에 해당하는 인자에 대한 객체의 속성이 존재하지 않을경우
// 기본값이 할당된다 이와같이 객체를 파라미터값을 전달하는 경우에는 파라미터의 전달 순서는 실행결과에 영향을 주지 않는다.

// 화살표 함수

// es2015의 화살표 함수는 기존 함수 표현식에 비해 간결함을 제공한다 도한 함수를 정의하는 영역의 this를 그대로 전달받을수 있다.
// 얼마나 간결한 표현식을 사용하는지 확인해보자. 아래 3개의 함수는 동일한 기능을 수행한다.

var test1 = function(a,b)  {
    return a+b;
}

let test2 = (a,b) => {
    return a+b;
}

let test3 = (a,b) => a+b;

console.log(test1(3,4));
console.log(test2(3,4));
console.log(test3(3,4));

// 하지만 주의할점이 하나 있다. 바로 화살표 함수와 전통적인 함수는 서로 다른 this 값이 바인딩된다는 점이다. 우선 전통적인 함수를 사용했을 때를 살펴보자.

function Person(name, yearCount) {
    this.name = name;
    this.age = 0;
    var incrAge = function () {
        this.age++;
    }
    for (var i=1 ; i<=yearCount; i++){
        incrAge();
    }
}

var p1 = new Person("홍길동", 20);

console.log(p1,name+"님의 나이: " + p1.age);


// 새로운 객체 리터럴

// es2015에서는 객체의 속성 표기법이 개선되었다 객체의 속성을 작성할 때 변수명과 동일하다면 생략할 수 있다.

var name = '홍길동';
var age = 20;
var email = "gasdlkmf@test.com" ;

//var obj = {name:name, age:age , email:email};
var obj = {name,age,email}; // 속성명과 변수명이 같을 경우 개선된 표기법
console.log(obj);

// 이와 같이 객체를 생성할 때 변수 값을 객체의 속성으로 지정하는 경우, 위와 같이 속성 값을 생략하여 표기할 수 있다.

// 또한 아래 예제와 같이 새로운 메서드 표기법도 제공한다.

let p1 = {
    name: '아이패드',
    price: 200000,
    quantity: 2,
    order: function() {  // 기존 메서드 표기법
        if (!this.amount) {
            this.amount = this.quantity * this.price;
        }
        console.log('주문금액 : ' + this.amount);
    },
    discount(rate) { // 새로운 메서드 표기법 
        if (rate > 0 && rate < 0.8) {
            this.amount = (1 - rate) * this.price * this.quantity;
        }
        console.log((100 * rate) + '% 할인된 금액으로 구매합니다.');
    }
}
p1.discount(0.2);
p1.order();


// 모듈

// 전통적인 자바스크립트에서는 <script> 태그로 js파일을 참조하는 정도는 가능했지만 모듈이라는 개념은 희박하다.

// ES2015부터 공식적으로 모듈 기능을 제공한다 모듈이란 독립성을 가진 재사용 가능한 코드블록이다.
// 여러개의 코드 블록을 각각의 파일로 분리한 후 필요한 모듈들을 조합해 애플리케이션을 개발할 수 있다.

// ES2015에서는 모듈을 JS 코드를 포함하고 있는 파일이라고 간주해도 무방하다 코드블록 안에서 import export 구문을 이용해서 모듈을 가져오거나 내보낼수있다

// 모듈 내부에서 선언된 모든 변수 함수 객체 클래스는 지역적인것(local)으로 간주된다.
// 따라서 재사용 가능한 모듈을 만들려면 반드시 외부로 공개하고자 하는것을 export해야 한다.
// epxort 된 모듈은 다른 모듈에서 import 구문으로 참조하여 사용할 수 있다.
// export 할수있는 대상은 변수 함수 객체 클래스 등이며 다음과 같이 export 할수 있다.

export let a = 1000;
export function f1(a) {...}
export {n1 ,  n2 as othername , ...}

// 이와 같이 변수나 함수 등을 expor 하기 위해서 export 키워드를 앞에 붙여주면 된다.
// 다른 방법으로는 일단 함수 나 변수 클래스를 작성한 다음 한번에 exprot 하는 방법이 있다

let var1 = 1000;
function add(a,b) {
    return a+b;
}

export {var1 , add};

// 이제 export 한 요소들을 import 해 보자. 파일 단위로 모듈을 생성하므로 파일의 경로를 지정하면된다. js 확장자는 생략될 수 있다.

import {add,var1} from './utils/utility';

console.log(add(4,5));
console.log(var1);


// 템플릿 리터럴
// 템플릿 리터럴은 역따옴표("`") 로 묶여진 문자열에서 템플릿 대입문(${}) 을 이용해 동적으로 문자열을 끼워넣어 구성할 수 있는 방법을 제공하낟
// 템플릿 대입문에는 수식 구문 변수 함수 호출 구문 등 대부분의 표헌식으로 사용할 수 이싿. 또한 템플릿 문자열은 개행 문자를 포함하여 여러줄로 작성할 수 있다.

var d1 = new Date();
var name = "홍길동";
var r1 = `${name}님에게 ${d1.toDataString()}에 연락했다.`;
console.log(r1);

var product = '갤s7'
var price = 1900000;
var str = `${product}의 가격은
            ${price}원 입니다.`;

console.log(str);

// 자바 스크립트의 배열도 list 형태의 컬렉션이기는 하지만 집합(set)이나 맵(map)형식의 데이터로 사용하기에는 불편함이 있다.
// ES2015에서는 Set,Map,WeakSet,WeakMap과 같은 집합, 맵을 제공하여 이런 불편함을 해소할 수 있다.

// set은 중복을 허용하지 않으며 합집합(union), 교집합(inersect)과 같은 다양한 집합 연산을 제공한다.

var s1 = new Set();
s1.add('사과'); s1.add('배')
s1.add('사과'); s1.add('포도');
//실행결과 : set{ '사과','배','포도'}
console.log(s1);







