
function Calculator() {
  this.read = () => {
    a = +prompt("1번숫자를 입력",0)
    b = +prompt("2번숫자를 입력",0)
  }

  this.sum = () => {
    return this.a+this.b
  }
  this.mul = () => {
    return this.a*this.b
  }
}


let calculator = new Calculator();
calculator.read();



alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );