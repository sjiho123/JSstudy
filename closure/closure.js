if (1 < 2) {
    let f = function () {
        let abc = 123;
    }
    f();
    console.log(abc);
}

// 현 상태는 f(); 의 실행과 동시에 f함수는 메모리에서 사라지게됨 계속해서 값을 받고있으면낭비이기때문에 abc 가 선언된것은 자동적으로 제거된다
// closure는 그런 상태를 강제적으로 깨고싶은 상황을 이야기하는것인데

if (1<2) {
    let f = function () {
        let abc = 123;
        let ddd = function() {
            return abc;
        }
        return ddd;
    }
    let ccc = f();
    console.log(ccc());
    
}

// 위와같은 상황은 f()안에 abc값이 본래라면 메모리값을 낭비시키기때문에 제거되야하지만 f함수안의 ddd함수가 abc값을 유지시키면서 제거되지않는 모습이다.
//이것이 closure기법이다