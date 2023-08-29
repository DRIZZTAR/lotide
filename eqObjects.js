// assertEqual
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴Assertion Failed: ${actual} !== ${expected}`);
  }

};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false! I'm starting to see importance of Object.keys
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

const shirtObject = { color: "red", size: "medium"};
const anotherShirtObject = { size: "medium", color: "red"};
const longSleeveMultiColorShirtObject = {size: "medium", colors: ["red", "blue"], sleeveLength: "long"};
const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };

// Tests
// ---eqObjects tests
console.log(eqObjects(shirtObject, anotherShirtObject)); // => true
console.log(eqObjects(shirtObject, longSleeveMultiColorShirtObject)); // => false
console.log(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject)); // => true
console.log(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject)); // => false
//assertEqual with eqObjects function
assertEqual(eqObjects(shirtObject, anotherShirtObject), true);
assertEqual(eqObjects(shirtObject, longSleeveMultiColorShirtObject), false);
//eqArrays with eqObjects
console.log(eqArrays([shirtObject], [anotherShirtObject])); //=> false
