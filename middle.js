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

//Implement middle which will take in an array and return the middle-most element(s) of the given array.
const middle = function(array) {
  // Assign middleElements an empty array to receive middle of arrays
  const middleElements = [];
  //Loop through array to see i less than two indexes, as two cant  have a middle
  if (array.length <= 2) {
    return middleElements;
    /*If Array length is an odd number we want the middle index pushed to middleElements.
      Math.floor will round down to the nearest whole number when we divide the array length by 2 and help us find the middle index */
  } else if (array.length % 2 === 1) {
    const middleIndex = Math.floor(array.length / 2);
    //Push the found element into our middleElements Array
    middleElements.push(array[middleIndex]);
  } else {
    // If the array is even, we want to return the two middle elements. At this point we know the array must be even and greater than 2 indexes
    // We will need two empty variables for the two middle indexes, then we can push them into the middleElements Array
    const middleIndex1 = (array.length / 2 - 1);
    const middleIndex2 = (array.length / 2);
    // Here we want to make sure to add the middle elements and not the index numbers.
    middleElements.push(array[middleIndex1], array[middleIndex2]);
  }
  return middleElements;
};

//Test cases for middle
console.log(middle(['Clown']));
console.log(middle(['Clown', 'Circus']));
console.log(middle([1, 2, 3]));
console.log(middle([1, 2, 'Monkey', 4, 5]));
console.log(middle(['Teenage', 'Mutant', 'Ninja', 'Turtles']));
console.log(middle([1, 2, 3, 4, 5, 6]));
