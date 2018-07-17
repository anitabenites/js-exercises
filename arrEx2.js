function largestOfFour(arr) {
  function findLargest(element) {
    let largest;
    element.sort(function(a, b) {
      return a - b;
    });
    return largest = element[element.length - 1];
  }
  arr = arr.map(findLargest);
  console.log(arr);
  return arr;
}
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
