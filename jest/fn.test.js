const fn = require('./fn');

test("이름과 나이를 전달받아서 객체를 반환해줘", () => {
    expect(fn.makeUser("Mike", 30)).toEqual({
        name:"Mike",
        age: 30,
    });
});

test("이름과 나이를 전달받아서 객체를 반환해줘", () => {
    expect(fn.makeUser("Mike", 30)).toStrictEqual({
        name:"Mike",
        age: 30,
    });
});