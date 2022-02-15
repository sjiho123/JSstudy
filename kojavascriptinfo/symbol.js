//자바 스크립트는 객체 프로퍼티 키로 오직 문자형과 심볼형만을 허용합니다. 숫자형, 불린형 모두 불가능하고 오직 문자형과 심볼형만 가능하죠.
//지금까지는 프로퍼티 키가 문자형인 경우만 살펴보았습니다. 이번 챕터에선 프로퍼티 키로 심볼값을 사용해 보면서, 심볼형 키를 사용할 때의 이점에 대해 살펴보도록 하겠습니다.

const { addListener } = require("process");

//심볼

//심볼(symbol)은 유일한 식별자(unique indentifier)를 만들고 싶을때 사용합니다.

//symbol()을 사용하면 심볼값을 만들 수 있습니다.

// id는 새로운 심볼이 됩니다.
let id = Symbol();

//심볼을 만들 때 심볼 이름이라 불리는 설명을 붙일 수도 있습니다. 심볼 이름은 디버깅 시 아주 유용합니다.
// 심볼id에는 "id"라는 설명이 붙습니다.
let id = Symbol("id");

//심볼은 유일성이 보장되는 자료형이기 때문에, 설명이 동일한 심볼을 여러개 만들어도 각 심볼값은 다릅니다.
//심볼에 붙이는 설명*심볼 이름)은 어떤 것에도 영향을 주지 않는 이름표 역활만을 합니다

//설명이 같은 심볼 두개를 만들고 이를 비교해보겠습니다.동일 연산자(==) 로 비교시 false 가 반환되는 것을 확인할 수 있습니다.

let id1 = Symbol("id");
let id2 = Symbol("id");

alert(id1 == id2); //false

//참고로 Ruby 등의 언어에서도 '심볼'과 유사한 개념을 사용하는데, 자바스크립트의 심볼은 이들 언어에 쓰이는 심볼과는 다르기 때문에 혼동하지 마시길 바랍니다.

//심볼은 문자형으로 자동 형 변환되지 않습니다.

//자바 스크립트에선 문자형으로 암시적 형 변환이 비교적 자유롭게 일어나는 편입니다. 
//alert 함수가 거의 모든 값을 인자로 받을수 있는 이유가 이 때문이죠. 그러나 심볼은 에외입니다. 심볼 값은 다른 자료형으로 암시적 형변호나(자동 형 변환)되지 않습니다.
//아래 예시에서 alert는 에러를 발생시킵니다.

let id = Symbol("id");
alert(id.toString()); //Symbol(id)가 얼럿 창에 출력됨

//Symbol.description 프로퍼티를 이용하면 설명만 보여주는 것도 가능합니다.
let id = Symbol("id");
alert(id.description); //id

//숨김 프로퍼티
//심볼을 이용하면 '숨김(hidden)'프로퍼티를 만들 수 있습니다. 숨김 프로퍼티느 ㄴ외부 코드에서 접근이 부ㄹ가능하고 값도 덮어쓸수 없는 프로퍼티입니다.

//서드파티 코드에서 가지고온 user라는 객체가 여러개 있고, user를 이용해 어떤 작업을 해야하는 상황이라고 가정해 봅시다. user에 식별자를 붙여주도록 합시다.

//식별자는 심볼을 이용해 만들도록 하겠습니다.

let user = { //서드파티 코드에서 가져온 객체
    name: "John" 
};

let id = Symbol("id");

user[id] = 1;

alert( user[id]);

//그런데 문자열 "id"를 키로 사용해도 되는데 Symbol("id")을 사용한 이유가 무엇일까요 ?
//user는 서드 파티 코드에서 가지고 온 객체 이므로 함부로 새로운 프로퍼티를 추가 할 수 없습니다. 
//그런데 심볼은 서드파티 코드에서 접근할 수 없기 때문에 , 심볼을 사용하면 서드파티 코드가 모르게 user에 식별자를 부여 할 수 있습니다.
//상황 하나를 더 가정해보겠습니다. 제 3의 스크립트(자바스크립트 라이브러리등)에서 uesr 를 식별해야 하는 상황이 벌여졋다고 해보죠, 
//uesr의 원천인 서드파티 코드, 현재 작성중인 스크립트, 제3의 스크립트가 각자 서로의 코드도 모른체 uesr를 식별해야 하는 상황이 벌어졌습니다.
//제 3의 스크립트에선 아래와 같이 Symbol("id")을 이용해 전용 식별자를 만들어 사용할 수 있습니다.

// ...
let id = Symbol("id");

user[id] = "제 3의 스크립트 id값";

