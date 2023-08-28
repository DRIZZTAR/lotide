const without = function(source, itemsToRemove) {
  let newArray = [];
  //Loop through source to check if any elements are in itemsToRemove
  for (let i = 0; i < source.length; i++) {
    //if element is NOT include in itemsToRemove, push element to newArray
    if (!itemsToRemove.includes(source[i])) {
      newArray.push(source[i]);
    }
  }
  //Retrur newArray after we've looped through source array :)!
  return newArray;
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


// Test Code

const words = ["hello", "world", "lighthouse"];
const result1 = without(words, ["lighthouse"]);
console.log(result1);
console.log(words); // Check to see if the original array was altered

// Test whether the result is as expected
assertArraysEqual(result1, ["hello", "world"]);

const result2 = without([1, 2, 3], [1]);
console.log(result2);
// Test whether the result is as expected
assertArraysEqual(result2, [2, 3]);

const result3 = without(["1", "2", "3"], [1, "banana", "3"]);
console.log(result3);
// Test whether the result is as expected
assertArraysEqual(result3, ["1", "2"]);

const result4 = without(["space", "time", "everything"], [1, "time", "space"]);
console.log(result4);
// Test whether the result is as expected
assertArraysEqual(result4, ["everything"]);

// eqArrayTest 1
const test1 = without([1, 2, 3], [1]);
const expected1 = [2, 3];
console.log(eqArrays(test1, expected1)); // true

// eqArraysTest 2
const test2 = without(["1", "2", "3"], [1, 2, "3"]);
const expected2 = ["1", "2"];
console.log(eqArrays(test2, expected2)); // true
