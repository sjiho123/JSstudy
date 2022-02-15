let accumulator = new Accumulator(1); // 최초값: 1

accumulator.read(); // 사용자가 입력한 값을 더해줌
accumulator.read(); // 사용자가 입력한 값을 더해줌


function Accumulator(number) {
  this.value = number

  function read() {
    this.a += +prompt("숫자",0)
  };
}

alert(accumulator.value); // 최초값과 사용자가 입력한 모든 값을 더해 출력함