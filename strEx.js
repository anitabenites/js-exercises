function findLongestWord(str) {
  var words = str.split(' '); // the method split turns the string in an array
  // console.log('this are the words', words);
  var maxLength = 0; // declare a variable to keep track of the maximum length

  for (var i = 0; i < words.length; i++) {
  console.log('this is i', i); // i goes from 0 to 8 and words.length goes until 9!!!
    if (words[i].length > maxLength) { // words[i] can be any element of the array? since it is words I get confused!
      maxLength = words[i].length;
      // console.log('this is the maxLength', maxLength);
    }
  }

  return maxLength;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));

// if statement inside of a for loop.
