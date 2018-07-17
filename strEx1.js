// step by step what is happening under the hood!
// first approach: using a conditional:
function repeatStringNumTimes(string,num) {
  var repeatedString = '';
  while(num > 0){ // As long as times is greater than 0, the statement is executed!
    repeatedString += string;
    num--; // it help to decrease the number each time i am looping until it cover 3 times.
  }
  return repeatedString;
}

console.log(repeatStringNumTimes('abc ', 3));
