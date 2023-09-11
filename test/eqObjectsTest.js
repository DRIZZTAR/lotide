const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

describe('#eqObjects', () => {
  it('should return true for equal objects', () => {
    const obj1 = { a: 1, b: 2 };
    const obj2 = { a: 1, b: 2 };
    assert.isTrue(eqObjects(obj1, obj2));
  });

  it('should return false for unequal objects with different values', () => {
    const obj1 = { a: 1, b: 2 };
    const obj2 = { a: 1, b: 3 };
    assert.isFalse(eqObjects(obj1, obj2));
  });

  it('should return false for unequal objects with different keys', () => {
    const obj1 = { a: 1, b: 2 };
    const obj2 = { a: 1, c: 2 };
    assert.isFalse(eqObjects(obj1, obj2));
  });

  it('should return true for equal objects with nested objects', () => {
    const obj1 = { a: 1, b: { c: 2 } };
    const obj2 = { a: 1, b: { c: 2 } };
    assert.isTrue(eqObjects(obj1, obj2));
  });

  it('should return false for unequal objects with nested objects', () => {
    const obj1 = { a: 1, b: { c: 2 } };
    const obj2 = { a: 1, b: { c: 3 } };
    assert.isFalse(eqObjects(obj1, obj2));
  });
});