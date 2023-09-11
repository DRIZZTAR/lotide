const middle = require('../middle.js');
const eqArrays = require('../eqArrays.js');
const assertArraysEqual = require('../assertArraysEqual');

const testMiddleFunction = function() {
  // Test cases for middle
  assertArraysEqual(middle(['Clown']), []);
  assertArraysEqual(middle(['Clown', 'Circus']), []);
  assertArraysEqual(middle([1, 2, 3]), [2]);
  assertArraysEqual(middle([1, 2, 'Monkey', 4, 5]), ['Monkey']);
  assertArraysEqual(middle(['Teenage', 'Mutant', 'Ninja', 'Turtles']), ['Mutant', 'Ninja']);
  assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
};

const testEqArraysFunction = function() {
  // Test cases for eqArrays
  assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  assertArraysEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
  assertArraysEqual(eqArrays(["1", "banana", "3"], ["1", "banana", "3"]), true);
  assertArraysEqual(eqArrays(["1", "2", "ranch dressing"], ["1", "2", "ranch dressing"]), false);
};

// Run the tests
testMiddleFunction();
testEqArraysFunction();