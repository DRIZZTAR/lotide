const assertArraysEqual = function(actual, expected) {
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
  //We now know if the arrays are equal or not equal. We can now console.log to output to the console
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴Assertion Failed: ${actual} !== ${expected}`);
  }

};

/*
assertArraysEqual("Lighthouse Labs", "Bootcamp");
assertArraysEqual("That's a spicy meatball", "That's a spicy meatball");
assertArraysEqual(1, 1);
assertArraysEqual(42, 1991);*/