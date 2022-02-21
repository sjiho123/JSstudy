// CommonJS는 모든 파일이 로컬 디스크에 있어, 필요할 때 바로 불러울 수 있는 상황에서만 사용한다.
// 브라우저에서 이런 방식은 필요한 모듈이 모두 다운로드 될때까지 아무것도 할 수 없는 상황이 발생한다.
// CommonJS는비동기방식으로자바스크립트모듈을 사용하는 API인 AMD를 만들엇다


//myModule.js
//define을 이용해 새로운 모듈을 불러오고, 콜백함수로 전해줌
define(['package/lib']), function(lib){
    //콜백함수 이용해서, 불러온 모듈 사용가능
    function foo() {
        lib.log('hello world!');
    }

    // 다른파일에서 foo함수를, foobar이란 이름의 모듈로 불러올 수 있게 만듬
    return {
        foobar:foo
    };
}

//위에서 선언한 모듈 불러오기
require(['package/myModule'], function(myModule){
    myModule.foobar();
});

//AMD는 동적로딩, 의존성 관리 모듈화가 톱니바퀴처럼 아름답게 맞물린 API 디자인을 제시한다
//AMD의 자세한 배경과 연관 기술에 관해서는 JavaScript 표준을 위한 움직임: CommonJS와 AMD를 참고한다 이 글에서는 AMD의 근간이 되는 3가지 개념을 살펴보겠다.

//동적 로딩
//<script>태그는 페이지 랜더링을 방해한다. <script>태그의 http요청과 다운로드 파싱 실행이 일어나는 동안 브라우저는 다른동작을 하지않는다 브라우저



