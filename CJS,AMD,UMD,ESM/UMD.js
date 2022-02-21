// 자바 스크립트로 개발을 하다 보면 AMD CJS 두 방식을 모두 지원해야 하는 상황이 생긴다 대표적으로 오픈 소스 라이브러리 모듈은 다양한 환경을 지원해야 할 필요가 있을 것이다.
// 그럴대는 UMD(Universal Module Definition)를 사용해서 모듈을 선언할 수 있다.

// UMD는 CommonJS처럼 스펙이 아닌 코드 작성 패턴이라고 보면 되며 다양한 패턴이 존재한다. 아래의 패턴은 모듈을 AMD,CommonJS,또는 브라우저 전역 변수로 할당해서 사용할 수 있도록 하는
// returnExports.js 패턴이다.

// 모듈 선언을 위해 IIFE 패턴을 사용하고 있다.
// 이 예제에서는 의존 모듈을 표현하기 위해 임의로 모듈 'b'를 사용한다
// root 파라미터는 실행 환경에 따라 브라우저의 window 또는 node.js의 global을 가리킨다
// factory 파라미터는 모듈 코드를 감싸고 있는 함수를 가리킨다.

(function (root,factory){
    // AMD에서 사용하는 define 함수를 사용할 수 있는지 확인한다.
    if(typeof define === 'function' && define.amd){
        //AMD 포멧에 따라 모듈 선언을 한다. 의존 모듈은 b가 된다.
        define(['b'], factory);


        // 의존 모듈이 없다면 아래와 같이 작성한다
        // define([], factory);

    // AMD를 지원하지 않는다면 CommonJS 모듈을 사용할 수 있는지 확인한다.
    }else if (typeof module === 'object' && module.exprots) {
        // CommonJS 포멧에 따라 모듈을 선언한다.
        // 의존 모듈을 factory 함수의 파라미터로 전달해준다.

        module.exprots = factory(require('b'));

        // 의존 모듈이 없다면 아래와 같이 작성한다
        // module.exports = factory();
    } else {
        // AMD도 CommonJS도 아니라면 브라우저라고 판단한다.
        // 여기서 root는 window가 된다. returnExports 는 전역에서 모듈의 이름이다.
        root.returnExports = factory(root.b);

        //의존 모듈이 없다면 아래와 같이 작성한다
        //root.returnExports = factory();
    }

// 함수를 즉시 실행한다.
// 첫번째 파라미터는 전역 변수.
// (여기서는 web Worker 지원을 위해 self 변수를 확인하지만 그럴 필요가 없다면 this만 전달해도 된다)
// 두번째 파라미터는 factory에 해당한다.
}(typeof self !== 'undefined' ? self : this, function(b){
    //return하는 값이 이 모듈이 내보내는 값이 된다(이 예제에서는 객체).
    return {};
}));
