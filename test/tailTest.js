const assert = require('chai').assert;
const tail = require('../tail.js');

// Test Case 1: Check the returned array elements
describe("#tail", () => {
  it("should return an array with the every element excluding the first element: 'Lighthouse' and 'Labs'", () => {
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.isArray(result, 'Result should be an array');
    assert.lengthOf(result, 2, 'Result should have a length of 2');
    assert.strictEqual(result[0], "Lighthouse", 'First element should be "Lighthouse"');
    assert.strictEqual(result[1], "Labs", 'Second element should be "Labs"');
  });
});

// Test Case 2: Check the original array is unmodified
describe("#tail", () => {
  it("should not modify the original array", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    const result = tail(words);
    //have to use notStrictEqual instead of deepEqual because the arrays are two distinct arrays and not the same reference in memory
    assert.notStrictEqual(words, result, 'Original array should remain unchanged');
  });
});