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

// eqObjects Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  // Check if both objects have the same number of keys using Object.keys
  if (Object.keys(object1).length === Object.keys(object2).length) {
    // Loop through the keys of one of the objects, again using Object.keys
    for (const key of Object.keys(object1)) {
      // Check if the value of the key is an array in both objects
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        // If both values are arrays, use the eqArrays function to compare them
        if (!eqArrays(object1[key], object2[key])) {
        // If the eqArrays function returns false, it means that the two arrays are not equal
        // return false to indicate that the two objects are not equal
          return false;
        }
      } else {
        // If the values are not arrays, compare them directly
        if (object1[key] !== object2[key]) {
          // If the values are not the same, return false
          return false;
        }
      }
    }
    // If all checks pass, return true
    return true;
  } else {
    // If both objects do not have the same number of keys, return false
    return false;
  }
};

// assertObjectsEqual function
const assertObjectsEqual = function(actual, expected) {
  // Import the inspect function from the util library
  const inspect = require('util').inspect;
  // Use the eqObjects function to compare the two objects
  if (eqObjects(actual, expected)) {
    // If eqObjects returns true, log a message indicating that the assertion passed, inspect function turns object into string so we can read it easier
    console.log(`✅✅✅Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    // If eqObjects returns false, log a message indicating that the assertion failed
    console.log(`🔴🔴🔴Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

// Define some test objects
const moviesGoodScaleOutOf10 = { darKnight: 9, ghostBusters: 8 };
const obj2 = { b: 2, a: 1 };
const obj3 = { a: 1, b: 3 };
const obj4 = { darKnight: 9, ghostBusters: 8 };

// Test the assertObjectsEqual function
assertObjectsEqual(moviesGoodScaleOutOf10, obj2); // Should fail
assertObjectsEqual(moviesGoodScaleOutOf10, obj3); // Should fail
assertObjectsEqual(obj4, moviesGoodScaleOutOf10); // Should pass