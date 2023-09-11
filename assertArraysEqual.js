const eqArrays = require('./eqArrays'); // Import your eqArrays function

const assertArraysEqual = function(actual, expected) {
  // Use my eqArrays function to compare the arrays
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

module.exports = assertArraysEqual;