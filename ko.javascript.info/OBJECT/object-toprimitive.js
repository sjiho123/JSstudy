//객체를 원시형으로 변환하기

//obj1 + obj2 처럼 객체끼리 더하느 ㄴ연산을 하거나 , obj1 - obj2 처럼 객체끼리 빼는 연산을 하면 어떤 일이 일어날까요 ? alert(obj)로 객체를 출력할때는 무슨일이 발생할까요?
//이 모든 경우에 자동형 변환이 일어납니다. 객체는 원시값으로 변환되고 그 후 의도한 연산이 수행됩니다.

//형변환 챕터에선 객체의 형 변환은 다루지 않았습니다.
//원시형 자료가 어떻게 문자,숫자,논리형으로 변환되는지만 알아보았죠. 이젠 메서드와 심볼에 대한 지식을 갖추었으니 본격적으로 이 공백을 매꿔봅시다.

//1. 객체는 논리 평가시 true를 반환합니다. 단 하나의 예외도 없죠 따라서 객체느 ㄴ숫자형이나 문자형으로만 형변환이 일어난다고 생각하시면 됩니다.
//2. 숫자형으로의 형 변환은 객체끼리 빼는 연산을 할 때나 수학 관련 함수를 적용할 때 일어납니다. 객체 date끼리 차감하면 date1 0 date2 두날자의 시간차이가 반환됩니다. date에대해선 date객체와 날자에서 다룰예정입니다.
// 3. 문자형으로의 형변환은 대게 alert(obj)같이객체를 출력하려고 할때 일어납니다.

// toPrimitive 
//특수 객체 메서드를 사용하면 숫자형이나 문자형으로의 형 변환을 원하는 대로 조절할 수 있습니다.
//객체 형변환은 세 종류로 구분되는데 hint라 불리는 값이 구분 기준이 됩니다 hint가 무엇인지는 명세서에 자세히 설명되어있는데 목표로 하는 자료형 정도로 이해하시면 될 것 같습니다.

//string
//alert 함수같이 문자열을 기대하는 연산을 수행할때는(객체-문자형변환),hint가 string이 됩니다.

//객체를 출력하려고함
alert(obj);

//객체를 프로퍼티 키로 사용하고 있음
anotherObj[obj] = 123;

// number
//수학 연산을 적용하려 할 때(객체-숫자형변환), hint는 number가 됩니다.

//명시적 형 변환
let num = Number(obj);

//(이항 덧셈 연산을 제외한) 수학 연산
let n = +obj; // 단항 덧셈 연산
let delta = date1 - date2 ;


// 크고 작음 비교하기
let greater = uesr1 > user2;

// "default"
// 연산자가 기대하느 ㄴ자료형이 '확실치 않을 때' hint 는 default가 됩니다. 아주 드물게 발생합니다.
// 이항 덧셈 연산자 + 는 피 연산자의 자료형에 따라 문자열을 합치는 연산을 할 수도있고 숫자를 더해주는 연산을 할수도 있습니다.
// 따라서 + 의 인수가 객체일때 hint가 default가 됩니다.

//동등 연산자 ==를 사용해 객체 - 문자형, 객체 -숫자형 , 객체 -심볼형끼리도 비교할 때도 객체를 어떤자료형으로 바궈야할지 확신이 안서므로 hint는 default가 됩니다

//이항 덧셈 연산은 hint로 default를 사용합니다.
let total = obj1 + obj2;

// obj == number 연산은 hint로 default를 사용합니다.
if (user ==1) { ...};

//크고 작음을 비교할 때 쓰이는 연산자 <,> 역시 피연산자에 문자형과 숫자형 둘 다를 허용하는데, 이 연산자들은 hint를 number로 고정합니다. hint가 default가 되는 일이 없죠.
// 이는 하위 호환성 때문에 정해진 규칙입니다.

//실제 일을 할 때는 이런 사항을 모두 외울 필요는 없습니다. date 객체를 제외한 모든 내장 객체느 ㄴhint가 default인 경우와 number인 경우를 동일하게 처리하기 때문입니다.
//우리도 커스텀 객체를 만들 땐 이런 규칙을 따르면 됩니다.

//boolean hint는 없습니다.
//hint는 총 세가지 입니다. 아주 간단하죠.
//boolean hint는 존재하지 않습니다. 모든 객체는 그냥 true로 평가됩니다 
// 게다가 우리도 내장 객체에 사용되는 규칙처럼 default와 number 를 동일하게 처리하면 결국엔 두 종류의 형 변환( 객체-문자형, 객체-숫자형) 만 남게 됩니다

// 자바 스크립트는 형 변환이 필요할 때, 아래와 같은 알고리즘에 따라 원하는 메서드를 찾고 호출합니다.
// 객체에 obj[symbol.toprimitive](hint) 메서드가 있는지 찾고, 있다면 메서드를 호출합니다.
// Symbol.toprimitive는 시스템 심볼로, 심볼형 키로 사용됩니다.
// 1에 해당하지 않고 hint가 string 이라면
// obj.toString()이나 objvalueOf()를 호출합니다 (존재하는 메서드만 실행됨)
// 1과 2에 해당하지않고 hint가 number나 default라면
// obj.valueof() 나 objtostring을 호출합니다 (존재하는 메서드만 실행됨)

// Symbol.toPrimitive
//첫번째 메서드부터 살펴봅시다. 자바스크립트엔 symbol.toPrimitive라는 내장 심볼이 존재하는데, 이 심볼은 아래와 같이 목표로 하는 자료형을 명명하는데 상ㅇ됩니다.
obj[Symbol.toPrimitive] = function(hint) {
    //반드시 원시값을 반환해야 합니다.
    //hint는 string number default중 하나가 될 수 있습니다.
};

// 실제 돌아가는 예시를 살펴보는게 좋을거같네요 user객체에 객체-원시형 변환 메서드 obj[Symbol.toPrimitive](hint)를 구현해보겠습니다.

let user = {
    name : "John",
    money : 1000,
[Symbol.toPrimitive](hint) {
    console.log(`hint: ${hint}`);
    return hint == "string" ? `{name: "${this.name}"}` : this.money;   
    }
};

console.log(user); //hint : string -> {name : "John"}
console.log(+user); //hint : number -> 1000
console.log(user+500); // hint: default -> 1500


//이렇게 메서드를 구현해놓으면 user는 hint에 따랄 (자기 자신을 설명해주는) 문자열로 변환되기도하고(가지고 있는 돈의 액수를 나타내는) 숫자로 변환디ㅗ기도 합니다.
//user[symbol.toPrimitive]를 사용하면 메서드 하나로 모든 종류의 형 변환을 다룰수 있습니다

// toString과 valueOf
// toString과 valueOf는 심볼이 생기기 이전부터 존재해 왔던 평범한 메서드 입니다. 이 메서드를 이용하면 구식 이긴 하지만 형 변환을 직접 구현할 수 있습니다.
// 객체에 Symbol.toPrimitive 가 없으면 자바 스크립트는 아래 규칙에 따라 toString이나 valueOf를 호출합니다.
// hint가 string인 경우 toString -> valueOf순(toString이 있다면 toString을 호출, toString이 없다면 valueOf를 호출함)
// 그 외: valueOf -> toString 순

//이 메서드 들은 반드시 원시값을 반환해야 합니다. toString이나 valueOf가 객체를 반환하면 그 결과는 무시됩니다.
// 마치 메서드가 처음부터 없었던것처럼 되버리죠

//데모를 살펴봅시다.
let user = {name:"John"}

alert(user); //[object Object]
//이런 이유 때문에 alert 에 객체를 넘기면 [object Object]가 출력되는 것 입니다.
// 여기서 valueOf는 튜토리얼의 완성도를 높이고 헷갈리느 ㄴ것을 줄여줄려고 언급했습니다. 앞서 본 바와 같이 valueOf는 객체 자신을 반환하기 때문에 그 결과가 무시됩니다 

//아래 user는 toString과 valueOf를 조합해 만들었는데 Symbol.toPrimitive를 사용한 위쪽 예시와 동일하게 동작합니다.

let user = {
    name: "John",
    money : 1000,

    toString() {
        return `{name:"${this.name}"}`;
    },

    valueOf() {
        return this.money;
    }
};

console.log(user); // toString-> {name:"John"}
console.log(+user) // valueOf -> 1000
console.log(user+500) // valueOf -> 1500

//출력결과가 Symbol.toPrimitive를 사용한 예제와 완전히 동일하다는 걸 확인할수있습니다
// 그런데 간혹 모든 형 변환을 한 곳에서 처리해야 하는 경우도 생깁니다. 이럴땐 아래와 같이 toString만 구현해 주면 됩니다.

let user = {
    name : "John",

    toString() {
        return this.name;
    }
};

console.log(user); //toString -> John
console.log(user + 500); // toString -> John500

//  객체에 Symbol.toPrimitive와 valueOf가 없으면, toString이 모든 형변환을 처리합니다.

// 반환 타입
// 위에서 소개해드린 세게의 메서드는 hint에 명시된 자료형으로의 형 변환을 보장해 주지 않습니다.
// toString()이 항상 문자열을 변환하리라는 보장이 없고 Symbol.toPrimitive의 hint가 number일때 항상 숫자형 자료가 반환되리라는 보장이 없습니다.

