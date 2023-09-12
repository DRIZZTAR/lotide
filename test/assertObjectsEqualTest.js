const assert = require('chai').assert;
const assertObjectsEqual = require('../assertObjectsEqual.js'); // Replace with the correct path to your assertObjectsEqual module

describe('#assertObjectsEqual', () => {
  it('should return true for equal objects', () => {
    const obj1 = { a: 1, b: 2 };
    const obj2 = { a: 1, b: 2 };
    assert.doesNotThrow(() => assertObjectsEqual(obj1, obj2));
  });

  it('should return false for unequal objects', () => {
    const obj1 = { a: 1, b: 2 };
    const obj2 = { a: 1, b: 3 };
    assert.throws(() => assertObjectsEqual(obj1, obj2));
  });

  it('should return true for objects with different key orders', () => {
    const obj1 = { a: 1, b: 2 };
    const obj2 = { b: 2, a: 1 };
    assert.doesNotThrow(() => assertObjectsEqual(obj1, obj2));
  });
});