//js object
class Calculator {

  constructor(operand1,operand2,operator) {
    this.operand1 = operand1;
    this.operand2 = operand2;
    this.operator = operator;
  }



  setoperand(value){
    if(this.operand1 == undefined ){
     this.operand1 = value
    }
    else {
      this.operand2 = value
    }
  }

  setOperator(operator){
    this.operator = operator
  }

  calculte(){
    console.log(this.operand1, this.operand2, this.operator);
  }

  print(){
    console.log(this.operand1, this.operand2, this.operator);
  }
  
}

c = new Calculator()

// c.print();
c.setoperand(2);
c.print()
c.setoperand(4);
c.print()
c.setOperator("+")
c.print()



// to instantiate this class:
// c1 = new Calculator(2,1,"-")
// c1.setoperand(5);
// c1.print()
