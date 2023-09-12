const assert = require('chai').assert;
const without = require('../without.js');

describe('without', function() {
  it('should return an array without the specified items', function() {
    const words = ["hello", "world", "lighthouse"];
    const originalWords = [...words]; // Create a deep copy using the spread operator
    const result1 = without(words, ["lighthouse"]);
    assert.deepEqual(result1, ["hello", "world"]);

    const result2 = without([1, 2, 3], [1]);
    assert.deepEqual(result2, [2, 3]);

    const result3 = without(["1", "2", "3"], [1, "banana", "3"]);
    assert.deepEqual(result3, ["1", "2"]);

    const result4 = without(["space", "time", "everything"], [1, "time", "space"]);
    assert.deepEqual(result4, ["everything"]);

    // Ensure that the original array remains unchanged
    assert.deepEqual(words, originalWords);
  });

  it('should return an empty array when removing all elements', function() {
    const numbers = [1, 2, 3, 4, 5];
    const result = without(numbers, [1, 2, 3, 4, 5]);
    assert.deepEqual(result, []);
  });

  it('should return the original array when removing no elements', function() {
    const colors = ["red", "blue", "green"];
    const originalColors = [...colors]; // Create a deep copy
    const result = without(colors, []);
    assert.deepEqual(result, originalColors);
  });
});