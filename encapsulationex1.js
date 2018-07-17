//encapsulation example:
let employee = {
  baseSalary: 30000,
  overtime: 10,
  rate: 20,
  getWage : function() {
    return this.baseSalary + (this.overtime*this.rate);
  }
};
console.log(employee.getWage());
