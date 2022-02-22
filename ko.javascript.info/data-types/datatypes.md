1 원시값의 메서드
1. 원시형의 종류는 number string bigint null undefined boolean symbol
2. js창시자는 고민이 많앗다

2 숫자형
1. 어림수
2. 부정확한계산

3 문자열
1. 문자열은 '' "" ` ` 등으로 표현가능하며 ` `은 백틱이다

4 배열
1. 배열은 객체로 표현하지못하는 순서가 있는 데이터의 표현을 위해서 사용되어졌다
2. 배열은 pop,push , shift , onshift로 나뉘어져있다
3. 배열에 for in , shift onshift는 연산처리가 for of , pop push에 비해 떨어진다
4. 배열엔 to string메서드가 구현되어있다

5 배열과 메소드
1. splice (pos, deleteCount, ...items) - pos 부터 deleteCount 개의 요소를 지우고, items 추가하기
2. concat(...items) - 배열의 모든 요소를 복사하고 items를 추가해 새로운 배열을 만든후 이르 반환함 items가 배열이면 이 배려의 인수를 기존 배열에 더해줌
3. indexOf/lastIndexOf(item,pos) - pos부터 원하는 item을 찾음. 찾게되면 해당 요소의 인덱스를, 아니면 -1을 반환함
4. includes(value) - 배열에 value가 있으면 true를 그렇지않으면 false를 반환함
5. find/filter(func) - func의 반환값을 true로 만드는 첫 번째/ 전체요소를 반환함
6. forEach(func) 모둔요소에 func호출함. 결과는 반환되지 않음
7. map(func) 모든 요소에 func을 호출하고, 반환된 결과를 가지고 새로운 배열을 만듦
8. sort(func) - 배열을 정렬하고 정렬된 배열을 반환함
9. reverse() - 배열을 뒤집어 반환함
10. split/join 문자열을 배열로 배열을 문자열로 반환함
11. reduce(func, initial) - 요소를 차례로 돌면서 func을 호출함. 반환값은 다음 함수 호출에 전달함. 최종적으로 하나의 값이 도출됨

6 iterable 객체
1. for..of 을 사용할수있는 객체를 이터러블이라고 부름
2. 이터러블엔 메서드 symbol.iterator가 반드시 구현되어있어야함
3. 인덱스와 length프로퍼티가 있는 객체는 유사배열이라 불림 유사배열객체엔 다양한 프로퍼티와 메서드가 있을 수 있는데 배열 내장 메서드는 없음
4. 명세서를 보면 대부분의 메서드는 진짜 배열이 아닌 이터러블이나 유사배열을 대상으로 동작한다고 쓰여있는걸 볼수 있음
5. 

7 map,set
1. new Map[iterable] - 맵을 만듬 [key,value]쌍이 있는 iterable을 선택적으로 넘길수 있는데 이때 넘긴 이터러블 객체는 맵 초기화에 사용
2. map.set(key,value) - 키를 이용해 값을 저장
3. map.get(key) - 키에 해당하는 값을 반환
4. map.has(key) - 키에 있으면 true 없으면 false
5. map.delete,map.clear,map.size
6. map과 일반적인 객체의 차이점 - 키의 type제약이 없다 객체도 키가 될수 있다
7. new Set([iterable]) - 셋을 만듭니다. iterable 객체를 선택적으로 전달받을 수 있는데(대개 배열을 전달받음), 이터러블 객체 안의 요소는 셋을 초기화하는데 쓰입니다.
8. set.add(value) - 값을 추가하고 셋 자신을 반환합니다
9. set.delete(value) - 값을 제거합니다. 호출 시점에 셋 내 값이 있어서 제거에 성공하면 true 아니면 false
10. set.has - 값이 존재하면 true 아니면 false
11. set.clear() 셋을 비웁니다 , set.size 몇개의 값이 있는지 세줍니다

8 위크맵 위크셋
1. 위크맵이 나온 이유는 객체가 없어질때 가비지 컬렉션으로 같이 없어져야할 데이터 때문이다
2. 원시값은 위크맵의 키가 될수 없다
3. 위크셋은 셋과 유사한데 객체만 저장할수 있다 원시값은 저장할수 없음
4. 위크셋은 add,has,delete를 사용할수있고 size,keys()나 반복작업 관련 메서드는 사용할수 없다

9 Object.keys, values, entries
1. obj. 으로 시작하는것이 아닌 Object. 으로 시작하는것이 특징
2. 객체엔 map,filter같은 배열전용 메서드를 사용할수없는데 비해 Object.entries를 이용하면 배열전용 메서드를 사용할수있다

10 구조 분해 할당
1. 구조분해 할당은 함수에 객체, 배열등을 분해하여 원하는 특정값을 넣을수있도록 하는 기능이다
분해 예제
```js
let arr = ["Bora", "Lee"]

// 구조 분해 할당을 이용해
// firstName엔 arr[0]을
// surname엔 arr[1]을 할당하였습니다.
let [firstName, surname] = arr;

alert(firstName); // Bora
alert(surname);  // Lee
```

```js
*!*
// 두 번째 요소는 필요하지 않음
let [firstName, , title] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

alert( title ); // Consul
```
