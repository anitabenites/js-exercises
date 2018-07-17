class Calculator {
  result = 0; // define in the App.js; const result!
  operand1 = null;
  operand2 = null;
  operator = null;
  add() {
    return this.operand1 + this.operand2;
  }
  subtract() {
    return -this.operand2 + this.operand1;
  }
  divide() {
    return this.operand1 * 1/this.operand2;
  }
  multiply() {
    return this.operand1 * this.operand2;
  }
  setOperator(value) {
    this.operator = value;
    this.operatorClicked = true;
  }
  setOperand(value) {
    if (this.operand1 && this.operatorClicked) {
      this.operand2 = value;
      this.operatorClicked = false;
    } else {
      this.operand1 = value;
    }

    if (this.operator && this.operand2) {
      this.result = this.calculate();
    }
  }
  percentage(value) {
    this.result = value/100;
  }
  calculate() {
    let result;
    switch (this.operator) {
      case '+':
        result = this.add()
        break;
      case '-':
        result = this.subtract()
        break;
      case '/':
        result = this.divide()
        break;
      case '*':
        result = this.multiply()
        break;
      default:
        result = 0;
        break;
    }
    this.operand1 = result;
    this.operand2 = null;
    return result
  }
  getResult() {
    return this.result;
  }
  clearResult() {
    this.result = 0;
    this.operand1 = null;
    this.operand2 = null;
    this.operator = null;
  }
}

const calc = new Calculator(1,2,'+');
console.log(calc.getResult());
