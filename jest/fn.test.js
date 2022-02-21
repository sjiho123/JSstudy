//mock function
// const mockFn = jest.fn();

// mockFn();
// mockFn(1);

// test('함수는 2번 호출됩니다.', () => {
//     expect(mockFn.mock.calls.length).toBe(2);
// });
// test("2번째로 호출된 함수에 전달된 첫번째 인수는 1 입니다.",()=>{
//     expect(mockFn.mock.calls.length).toBe(2);
// });

const aa = jest.fn();


function forEachAdd1(arr){
    arr.forEach(num =>{
        aa(num+1)
    })
}

forEachAdd1([10,20,30])

test("함수 호출은 3번 됩니다", () =>{
    expect(aa.mock.calls.length).toBe(3)
})

test("전달된 값은 11, 21, 31 입니다", () =>{
    expect(aa.mock.calls[0][0]).toBe(11);
    expect(aa.mock.calls[1][0]).toBe(21);
    expect(aa.mock.calls[2][0]).toBe(31);
})