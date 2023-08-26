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

/*
assertArraysEqual("Lighthouse Labs", "Bootcamp");
assertArraysEqual("That's a spicy meatball", "That's a spicy meatball");
assertArraysEqual(1, 1);
assertArraysEqual(42, 1991);*/