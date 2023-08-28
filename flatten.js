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
const superHeros = ["Batman", "Spider-man", "Hulk"];
const result1 = (flatten([superHeros, ["Green Lantern", "Green Goblin"], "Venom"]));
console.log(`Flatten result 1, ${result1}`);
console.log(`Original list ${superHeros}`);
console.log('---');
console.log(flatten([1, 2, [3, 4], 5, [6]]));
console.log('---');
console.log(flatten([42,48,[1, 2, 3], 'Jamaica']));

// Test 1
const test1 = flatten([1, 2, [3, 4], 5, [6]]);
const expected1 = [1, 2, 3, 4, 5, 6];
assertArraysEqual(test1, expected1);

// Test 2
const test2 = flatten([42,48,[1, 2, 3], 'Jamaica']);
const expected2 = [42,48,1, 2, 3,'Jamaica'];
assertArraysEqual(test2, expected2);

// Test 3
const test3 = flatten([superHeros, ["Green Lantern", "Green Goblin"], "Venom"]);
const expected3 = ["Batman", "Spider-man", "Hulk", "Green Lantern", "Green Goblin", "Venom"];
assertArraysEqual(test3, expected3);

// Test 1
const results1 = eqArrays([1, 2, 3], [1, 2, 3]);
const expectedResult1 = true;
if (results1 === expectedResult1) {
  console.log(`Test 1 passed: ${results1} === ${expectedResult1}`);
} else {
  console.log(`Test 1 failed: expected ${expectedResult1}, but got ${results1}`);
}

// Test 2
const results2 = eqArrays([1, 2, 3], [3, 2, 1]);
const expectedResult2 = false;
if (results2 === expectedResult2) {
  console.log(`Test 2 passed: ${results2} === ${expectedResult2}`);
} else {
  console.log(`Test 2 failed: expected ${expectedResult2}, but got ${results2}`);
}

// Test 3
const results3 = eqArrays(["1", "2", "3"], ["1", "2", "3"]);
const expectedResult3 = true;
if (results3 === expectedResult3) {
  console.log(`Test 3 passed: ${results3} === ${expectedResult3}`);
} else {
  console.log(`Test 3 failed: expected ${expectedResult3}, but got ${results3}`);
}

// Test 4
const results4 = eqArrays(["1", "2", "3"], ["1", "2", 3]);
const expectedResult4 = false;
if (results4 === expectedResult4) {
  console.log(`Test 4 passed: ${results4} === ${expectedResult4}`);
} else {
  console.log(`Test 4 failed: expected ${expectedResult4}, but got ${results4}`);
}

