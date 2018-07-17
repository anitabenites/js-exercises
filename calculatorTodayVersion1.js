class Calculator {

  // constructor(operand1,operand2,operator) {
  //   this.operand1 = operand1;
  //   this.operand2 = operand2;
  //   this.operator = operator;
  //   this.result;
  // }

  add(operand1,operand2) {
    console.log("this is the add operator", operand1, operand2)
    return operand1 + operand2;
  }
  subtract(operand1,operand2) {
    return operand1 - operand2;
  }
  divide(operand1,operand2) {
    return operand1*1/operand2;
  }
  multiply(operand1,operand2) {
    return operand1 * operand2;
  }
  // setOperator(value) {
  //   console.log('this setOperator value', value);
  //   this.operator = value;
  // }
  // setOperand(value) {
  //   console.log('we are in the setOperand', value);
  //   if (this.operand1) {
  //     this.operand2 = value;
  //   } else {
  //     this.operand1 = value;
  //   }
  //   if (this.operator && this.operand2) {
  //     console.log('this.operator&&this.operand2', this.operator, this.operand2);
  //     this.result = this.calculate();
  //   }
  // }
  calculate(operand1, operand2, operator) {
    let result;
    switch (operator) {
      case '+':
        result = this.add(operand1, operand2)
        break;
      case '-':
        result = this.subtract(operand1, operand2)
        break;
      case '/':
        result = this.divide(operand1, operand2)
        break;
      case '*':
        result = this.multiply(operand1, operand2)
        break;
      default:
        result = 0;
        break;
    }
    this.operand1 = result;
    console.log('this is the result', this.operand1);
    this.operand2 = null;
    return result
  }

  // getResult() {
  //   console.log('this is the result', this.result);
  //   return this.result;
  // }
  // clearResult() {
  //   this.result = 0;
  //   this.operand1 = null;
  //   this.operand2 = null;
  //   this.operator = null;
  // }
}



const calc = new Calculator();

let firstOperation = calc.calculate(1,2,'+');
console.log('this result', firstOperation);


// let secondOperation = calc.calculate(firstOperation, 5, '*');
// console.log('this result', calc.calculate(secondOperation, 6, '*'));
//
// let thirdOperation = calc.calculate(10,2,'/');
// console.log('the thirdOperation result is', thirdOperation);
