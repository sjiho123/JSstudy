// 메서드와 this
//객체는 사용자, 주문 등과 같이 실제 존재하는 개첼르 표현하고자 할때 생성됩니다.
let user = {
    name: "John",
    age : 30
};

// 사용자는 현실에서 장바구니에서 물건 선택하기, 로그인하기, 로그아웃하기 등의 행동을 합니다. 이와 마찬가지로 사용자를 나타내는 객체 user도 특정한 행동을 할 수 있습니다.
// 자바 스크립트에선 객체의 프로퍼티에 함수를 할당해 객체에게 행동할 수 있는 능력을 부여해줍니다.

// 메서드 만들기
// 객체 user에게 인사할 수 있는 능력을 부여해 줍시다.

let user = {
    name: "John",
    age : 30
};

user.sayHi = function () {
    alert("안녕하세요!");
};

user.sayHi(); //안녕하세요!

//함수 표현식으로 함수를 만들고, 객체 프로퍼티 user.sayHi에 함수를 할당해 주었습니다.
// 이제 객체에 할당된 함수를 호출하면 user가 인사를 해줍니다.
// 이렇게 객체 프로퍼티에 할당된 함수를 메서드(method) 라고 부릅니다.
// 위 예시에선 user에 할당된 sayHi가 메서드이죠.
// 메서드는 아래와 같이 이미 정의된 함수를 이용해서 만들 수도 있습니다.

let user = {
    //...
};

//함수 선언
function sayHi() {
    alert("안녕하세요!");
};

user.sayHi = sayHi;

user.sayHi(); //안녕하세요!

// 객체 지향 프로그래밍

// 객체를 사용하여 개채를 표현하느 ㄴ방식을 객체 지향 프로그래밍(object-oriented programming, OOP)이라 부릅니다.
// OOP는 그 자체만으로도 학문의 분야를 만드는 중요한 주제입니다. 올바른 개체를 선택하는 방법 개체 사이의 상호작용을 나타내는 방법등에 관한 의사결정은 객체 지향 설계를 기반으로 이뤄집니다.
// 개체 지향 프로그래밍 관련 추천도서로는 에릭감마의 GoF의 디자인 패턴 그래디부치의 uml을 활용한 개체 지향 분석 설계 등이 있습니다.

//메서드 단축 구문
// 객체 리터럴 안에 메서드를 선언할때 사용할 수 있는 단축 문법을 소개해 드리겠습니다

// 아래 두 객체느 ㄴ동일하게 동작합니다.

user = {
    sayHi : function () {
        alert("Hello");
    }
};

// 단축 구문을 사용하니 더 깔끔해 보이네요.
user = {
    sayHi() {
        alert("Hello");
    }
};

//위처럼 function 을 생략해도 메서드를 정의할 수 있습니다.

// 일반적인 방법과 단축 구문을 사용한 방법이 완전히 동일하진 않습니다. 객체 상속과 관련된 미묘한 차이가 존재하는데 지금으로선 이 차이가 중요하지 않기 때문에 넘어가도록 하겠습니다.

// 메서드와 this
// 메서드는 객체에 저장된 정보에 접근할 수 있어야 제 역활을 할 수 있습니다. 모든 메서드가 그런건 아니지만, 대부분의 메서드가 객체 프로퍼티의 값을 활용합니다.

// user.sayHi()의 내부 코드에서 객체 user에 저장된 이름(name)을 이용해 인사말을 만드는 경우가 이런 경우에 속합니다.
// 메서드 내부에서 this 키워드를 사용하면 객체에 접근할 수 있습니다.
// 이때'점 앞' 의 this는 객체를 나타냅니다 정확히는 메서드를 호출할 때 사용된 객체를 나타내죠.

let user = {
    name: "John",
    age : 30,

    sayHi() {
        // 'this' 는 '현재 객체' 를 나타냅니다.
        alert(this.name);
    }

};

user.sayHi(); //John

// user.sayHi() 가 실행되는 동안에 this는 user를 나타냅니다.
// this를 사용하지 않고 외부 변수를 참조해 객체에 접근하느 ㄴ것도 가능합니다.

let user = {
    name:"John",
    age : 30,

    sayHi() {
        alert(user.name); //this대신 user를 이용함
    }
}

//그런데 이렇게 외부 변수를 사용해 객체를 참조하면 예상치 못한 에러가 발생할 수 있습니다. user를 복사해 다른 변수에 할당하고 user는 전혀 다른값으로 덮어썻다고 가정해봅시다.
// sayHi()는 원치않는 값을 참조할 겁니다.

// 예시

let user = {
    name:"John",
    age : 30,

    sayHi() {
        alert(user.name);

    }
};

let admin = user;
user = null; // user를 null로 덮어씁니다.

admin.sayHi() // sayHi()가 엉뚱한 객체를 참고하면서 에러가 발생했습니다.

// alert 함수가 user.name 대신 this.name을 인수로 받았다면 에러가 발생하지 않았을 겁니다.

function sayHi(){
    alert(this.name);
}

//this 값은 런타임에 결정됩니다. 컨텍스트에 따라 달라지죠.

//동일한 함수라도 다른 객체에서 호출했다면 this가 참조하는  값이 달라집니다.

let user = { name : "John"}
let admin = {name : "Admin"};

function sayHi() {
    alert (this.name);
}

//별개의 객체에서 동일한 함수를 사용함
user.f = sayHi;
admin.f = sayHi;

//'this'는 점(.) 앞의' 객체를 참조하기 때문에
// this값이 달라짐
user.f(); //John(this ==user)
admin.f(); // Admin(this == admin)

admin['f'](); //Admin(점과 대괄호는 동일하게 동작함)

//규칙은 간단합니다. obj.f()를 호출했다면 this 는 f를 호출하는 동안의 obj입니다. 위 예시에선 obj가 user나 admin을 참조하겠죠.

//객체 없이 호출하기 : this == undefined
//객체가 없어도 함수를 호출할 수 있습니다.

function sayHi() {
    alert(this);
}

sayHi(); // undefined

// 위와 같은 코드를 엄격 모드에서 실행하면, this 엔 undefined가 할당됩니다.

// 그런데 엄격 모드가 아닐때는 this가 전역객체를 참조합니다. 브라우저 환경에선 window라느 ㄴ전역 객체를 참조하죠 이런 동작 차이는 "use strict  가 도입된 배경이기도 합니다".
// 전역 객체는 전역 객체에 서 자세히 다룰 예정입니다.
// 이런 식의 코드는 대게 실수로 작성된 경우가 많습니다 함수 본문에 this가 사용되었다면 객체 컨텍스트내에서 함수를 호출할 것이라고 예상하시면 됩니다.

// 자유로운 this가 만드는 결과
// 다른 언어를 사용하다 자바스크립트로 넘어온 개발자는 this를 혼동하기 쉽습니다. this는 항상 메서드가 정의된 객체를 참조할 것이라고 착각하죠.
// 이런개념을 bound this라고 합니다.
// 자바 스크립트에서 this는 런타임에 결정됩니다. 메서드가 어디서 정의되었는지에 상관없이 this는 점앞의 객체가 무엇인가에 따라 자유롭게 결정됩니다.
// 이렇게 this가 런타임에 결정되면 좋은점도 있고 나쁜점도 있습니다. 함수(메서드)를 하나만 만들어 여러 객체에서 재사용할수 있다는것은 장점이지만
// 이런 유연함이 실수로 이어질수 있다는것은 단점입니다.
// 자바 스크립트가 this를 다루는 방식이 좋은지 나쁜지는 우리가 판단할 문제가 아닙니다. 개발자는 this의 동작방식을 충분히 이해하고 장점을 취하면서 실수를 피하는 데만 집중하면 됩니다.

// this가 없는 화살표 함수
// 화살표 함수는 일반 함수와는 달리 고유한 this를 가지지 않습니다. 화살표 함수에서 this를 참조하면, 화살표 함수가 아닌 평범한 외부 함수에서 this값을 가져옵니다.

//아래 예시에서 함수 arrow()의 this는 외부함수 user.sayHi()의 this가 됩니다.

let user= {
    firstName: "보라",
    sayHi() {
        let arrow = () => alert(this.firstName);
        arrow();
    }
};

user.sayHi();

//별개의 this가 만들어지는건 원하지 않고 외부 컨텍스트에 있는 this를 이용하고 싶을 경우 화살표 함수가 유용합니다.
// 이에 대한 자세한 내용은 별도의 챕터 화살표 함수 다시 살펴보기 에서 다루겠습니다.

//요약

//객체 프로퍼티에 저장된 함수를'메서드' 라고 부릅니다.
// object.dosomthing()은 객체를 행동할수있게 해줍니다.
// 메서드는 this로 객체를 참조합니다

// this 값은 런타임에 결정됩니다.
// 함수를 선언할 때 this를 사용할 수 있습니다. 다만 함수가 호출되기 전까지 this엔 값이 할당되지 않습니다.
// 함수를 복사헤 객체 간 전달할 수있습니다.
// 함수를 객체 프로퍼티에 저장해 object.method()같이 메서드 형태로 호출하면 this는 object를 참조합니다.

//화살표 함수는 자신만의 this를 가지지 않는다는 점에서 독특합니다. 화살표 함수 안에서 this를 사용하면, 외부에서 this값을 가져옵니다.

