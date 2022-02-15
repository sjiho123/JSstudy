    // `a`가 두 개 포함된 문자열을 만들었습니다
    const str = "abcabc";

    // `g` 플래그 없이는 최초에 발견된 문자만 반환됩니다
    str.match(/a/);
    // ["a", index: 0, input: "abcabc", groups: undefined]

    // `g` 플래그와 함께라면 모든 결과가 배열로 반환됩니다
    str.match(/a/g);
    // (2) ["a", "a"]

    // 줄바꿈이 포함된 문자열을 만들었습니다
    const str = `abc
    abc`;

    // 줄바꿈을 별도로 확인할 수 없습니다
    str.match(/$/g);
    // [""]

    // 각 줄 별로 시작과 끝을 확인할 수 있습니다
    str.match(/$/gm);
    // (2) ["", ""]


    //g -> 글로벌 검색 , m -> 줄바꿈 검색 , i-> 대소문자 구분안함 ,  시작(^)앵커 , 종료($)앵커