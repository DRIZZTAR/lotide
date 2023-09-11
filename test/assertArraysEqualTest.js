const assert = require('chai').assert;
const assertArraysEqual = require('../assertArraysEqual');


describe("#assertArraysEqual", () => {
  it("should return false for two non-array strings", () => {
    assert.isFalse(assertArraysEqual("Lighthouse Labs", "Bootcamp"));
  });

  it("should return true for two non-array strings that are equal", () => {
    assert.isTrue(assertArraysEqual("That's a spicy meatball", "That's a spicy meatball"));
  });

  it("should return true for two arrays with equal content", () => {
    assert.isTrue(assertArraysEqual([1], [1]));
  });

  it("should return false for two arrays with different content", () => {
    assert.isFalse(assertArraysEqual([42], [1991]));
  });
});