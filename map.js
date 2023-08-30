//take in 2 arguments 1 an array to map, 2 a callback function
//add words
const words = ["ranch", "thousand island", "hot sauce", "siracha"];

const map = function(array, callback) {
  //initialize empty variable with an empty array
  const results = [];
  //loop through array
  for(let item of array) {
    //callback function call on item in array, push to results array
    results.push(callback(item));
  }
  return results;
}

const results1 = map(words, word => word[0]);

//assertArraysEqual
const assertArraysEqual = function(actual, expected) {
  // Check if arrays have same length, return false if !==
  if (actual.length !== expected.length) {
    console.log(`🔴🔴🔴Assertion Failed: ${actual} !== ${expected}`);
    return;
  }
  // Loop through elements in arrays to see if they !==
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      console.log(`🔴🔴🔴Assertion Failed: ${actual} !== ${expected}`);
      return;
    }
  }
  // We now know that the arrays are equal. We can now console.log to output to the console
  console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
};

//eqArrays
const eqArrays = function(actual, expected) {
  // CHeck if arrays have same length, return false if !==
  if (actual.length !== expected.length) {
    return false;
  }
  //Loop through elements in arrays to see if they !==
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      return false;
    }
  }
  //Because our arrays have the same length and we've checked their elements by looping through, they will be === and true can be returned
  return true;
};

//tests

// Test Case 1: Map an array to an array of their first letters.
const string = ["Spiderman", "Batman", "Superman", "Wonder Woman"];
const firstLetters = map(string, hero => hero[0]);
assertArraysEqual(firstLetters, ["S", "B", "S", "W"]);

// Test Case 2: Map an array to an array of their lengths.
const funnyWords = ["flibbertigibbet", "gobbledygook", "hocus-pocus", "mumbo jumbo"];
const lengths = map(funnyWords, word => word.length);
assertArraysEqual(lengths, [14, 12, 10, 10]);

// Test Case 3: Map an array to an array of their last letters.
const string2 = ["Iron Man", "Captain America", "Thor"];
const lastLetters = map(string2, hero => hero[hero.length - 1]);
assertArraysEqual(lastLetters, ["n", "a", "r"]);