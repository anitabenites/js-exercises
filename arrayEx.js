function largestOfFour(arr){
var maxArray = 0;
  for (var i = 0; i < arr.length; i++){
    maxArray = arr[i];
    console.log('these are each items of the maxArray', maxArray);
    for (var j = 0; j < maxArray.length; j++) {
      newMaxArray = maxArray[j];
      console.log('this is the newMaxArray', newMaxArray);
    }
  }

}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
