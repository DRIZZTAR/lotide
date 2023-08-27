//Create a function flatten which will take in an array containing elements including nested arrays of elements, and return a "flattened" version of the array.

const flatten = function(nestedArray) {
  //create empty array for new flattened array
  const flattened = [];
  //loop throug elements and look for array
  for (let i = 0; i < nestedArray.length; i++) {
    if (Array.isArray(nestedArray[i])) {
      //loop through nested arrays elements if found and add both nested and un nested elements to flattened with push
      for (let j = 0; j < nestedArray[i].length; j++) {
        flattened.push(nestedArray[i][j]);
      }
      //if no nested arrays found, only add array
    } else {
      flattened.push(nestedArray[i]);
    }
  }
  //return the new flattened array
  return flattened;
};

// Assert Equal Arrays

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

//equal Arrays

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
const superHeros = ["Batman", "Spider-man", "Hulk"]
const result1 = (flatten([superHeros, ["Green Lantern", "Green Goblin"], "Venom"]));
console.log(`Flatten result 1, ${result1}`);
console.log(`Original list ${superHeros}`);
console.log('---'); 
console.log(flatten([1, 2, [3, 4], 5, [6]]));
console.log('---'); 
console.log(flatten([42,48,[1, 2, 3], 'Jamaica']));

