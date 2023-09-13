const assert = require('chai').assert;
const assertObjectsEqual = require('../assertObjectsEqual.js');

describe('#assertObjectsEqual', () => {
  it('should return true for equal objects', () => {
    const obj1 = { a: 1, b: 2 };
    const obj2 = { a: 1, b: 2 };
    assert.deepStrictEqual(assertObjectsEqual(obj1, obj2), true);
  });

  it('should return false for unequal objects', () => {
    const obj1 = { a: 1, b: 2 };
    const obj2 = { a: 1, b: 3 };
    assert.deepStrictEqual(assertObjectsEqual(obj1, obj2), false);
  });

  it('should return true for objects with different key orders', () => {
    const obj1 = { a: 1, b: 2 };
    const obj2 = { b: 2, a: 1 };
    assert.deepStrictEqual(assertObjectsEqual(obj1, obj2), true);
  });
});
