const assert = require('chai').assert;
const eqArrays = require('../eqArrays');

describe("#eqArrays", () => {
  it("should return true for two equal arrays", () => {
    assert.isTrue(eqArrays([42, 42, 42], [42, 42, 42]));
  });

  it("should return false for two arrays with different content", () => {
    assert.isFalse(eqArrays([1, 2, 3], [3, 2, 1]));
  });

  it("should return false for two arrays with different content including strings", () => {
    assert.isFalse(eqArrays(["Batman", "Spider-man", "Hulk"], ["Batman", "Green Goblin", "Hulk"]));
  });

  it("should return true for two arrays with equal content including strings", () => {
    assert.isTrue(eqArrays(["Batman", "Spider-man", "Hulk"], ["Batman", "Spider-man", "Hulk"]));
  });
});