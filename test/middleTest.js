const assert = require('chai').assert;
const middle = require('../middle');


// Using deepEqual to check for equality of nested arrays, and arrays in general
describe("#middle", () => {
  it("should return an empty array for ['Clown']", () => {
    assert.deepEqual(middle(['Clown']), []);
  });

  it("should return an empty array for ['Clown', 'Circus']", () => {
    assert.deepEqual(middle(['Clown', 'Circus']), []);
  });

  it("should return [2] for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it("should return ['Monkey'] for [1, 2, 'Monkey', 4, 5]", () => {
    assert.deepEqual(middle([1, 2, 'Monkey', 4, 5]), ['Monkey']);
  });

  it("should return ['Mutant', 'Ninja'] for ['Teenage', 'Mutant', 'Ninja', 'Turtles']", () => {
    assert.deepEqual(middle(['Teenage', 'Mutant', 'Ninja', 'Turtles']), ['Mutant', 'Ninja']);
  });

  it("should return [3, 4] for [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
});