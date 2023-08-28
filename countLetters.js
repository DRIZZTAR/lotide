// assertEqual
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴Assertion Failed: ${actual} !== ${expected}`);
  }

};


//countLetters
// Define a function called countLetters that takes a string as input
const countLetters = function(string) {
  // Create an empty object to store letter counts
  const letterCounts = {};

  // Loop through each character (char) in the string
  for (const char of string) {
    //We dont want spaces returned so if char is not a space....
    if (char !== ' ') {
      /* if char is already a key in letterCounts increment its value by 1.
      If key has not been added we will need to catch it in the else statement which will create the key, and initialize it to 1*/
      if (letterCounts[char]) {
        //increment value by one for key [char]
        letterCounts[char] ++;
      }   else {
        //creating key and initializing value at 1
        letterCounts[char] = 1;
      }
    }
  }
  //return object letterCounts containing key/value pairs :)!
  return letterCounts;
};

const expectedOutput = {
  't': 1,
  'h': 1,
  'a': 2,
  's': 1,
  'm': 1,
  'o': 1,
  'r': 1,
  'e': 1
};

const result = countLetters("thats amore");
console.log(result);

//fails because were comparing two objects will have to revisit this test
assertEqual(result, expectedOutput);