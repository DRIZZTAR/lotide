const takeUntil = function(array, callback) {
  const result = [];
  //iterate through each item/element in array
  for (const item of array) {
    //Check if callback function returns a true for the current item
    if (callback(item)) {
      //If True, break out of loop
      break;
    }
    //If callback was false for current item push item to result array
    result.push(item);
  }
  return result;
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

const  more = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil( more, x => x < 0);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');

const data3 = ["Superman", "Spider-Man", "Batman", "Wonder Woman", "Iron Man"];
const results3 = takeUntil(data3, x => x === 'Batman');

//test
console.log('---');
console.log("Test  more:");
assertArraysEqual(results1, [1, 2, 5, 7, 2]);
console.log('---');
console.log("Test data2:");
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);
console.log('---');
console.log("Test data3:");
assertArraysEqual(results3, ["Superman", "Spider-Man"]);
console.log('---');
console.log("Results for  more:");
console.log(results1);
console.log('---');
console.log("Results for data2:");
console.log(results2);
console.log('---');
console.log("Results for data3:");
console.log(results3);

