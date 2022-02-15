



// 로더

// 플러그인

// 바벨

// 롤업js

// 스노우팩
// 모듈 번들러가아닌 빌드 도구


// CJS = CommonJS

// CommonJS(http://www.commonjs.org/)는 
// 이름의 'Common'에서 알 수 있듯이 JavaScript를 브라우저에서뿐만 아니라 범용 언어로 사용할 수 있도록 하겠다는 의지를 가진 워킹 그룹입니다.

// 아래와 같이 require을 통해 package/lib 모듈을 변수에 담을 수 있습니다.
var lib = require('package/lib');

// 가져온 모듈을 아래와 같이 사용할 수 있습니다.
function foo () {
  lib.log('hello world!');
}

// foo 함수를 다른 파일에서 사용할 수 있도록, 다른 모듈로 추출될 수 있습니다.
exports.foobar = foo;

// AMD = Asynchronous Module Definition

// CommonJS는 모든 파일이 로컬 디스크에 있어 필요할 때 바로 불러올 수 있는 상황을 전제로 합니다. 
// 즉 동기적인 동작이 가능한 서버사이드 자바스크립트 환경을 전제로 합니다. 
// 브라우저에서 이런 방식은 필요한 모듈이 모두 다운로드할 때까지 아무것도 할 수 없는 상태가 되어 치명적인 단점이 됩니다.

// AMD 그룹은 비동기 상황에서 자바스크립트 모듈을 사용하기 위해 CommonJS에서 함께 논의하다 합의점을 이루지 못하고 독립한 그룹입니다. 
// CommonJS가 자바스크립트를 브라우저 밖으로 꺼내기 위해 탄생된 그룹이고, AMD는 브라우저에 중점을 둔 그룹입니다.

// 종속성을 갖는 모듈인 'package/lib'를 모듈 선언부의 첫 번째 파라미터에 넣으면,
// 'package/lib'은 콜백 함수의 lib 파라미터 안에 담깁니다.
define(['package/lib'], function (lib) {

  // 로드된 종속 모듈을 아래와 같이 사용할 수 있습니다.
  function foo () {
    lib.log('hello world!');
  }

  // 생성된 foo 함수는 리턴을 통해 foobar라는 이름의 다른 모듈로 추출될 수 있습니다.
  return {
    foobar: foo
  };
});

// API 명세로 구현된 대표적인 도구는 dojo toolkit 과 require.js가 있습니다.

// UMD = Universal Module Definition
// AMD와 CommonJS 두 그룹으로 나누어지다 보니 서로 호환되지 않는 문제가 발생하게 됩니다. 이것을 해결하기 위해 나온 것이 UMD입니다. 
// UMD는 디자인 패턴에 더 가깝습니다. AMD와 CommonJS, window에 추가하는 방식까지 모두 가능한 모듈을 작성하는 방식입니다.


// ESM = EcmaScript modules

