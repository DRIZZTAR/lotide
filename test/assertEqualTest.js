const assert = require('chai').assert;
const assertEqual = require('../assertEqual');

describe("#assertEqual", () => {
  it("should return false for two non-equal strings", () => {
    assert.isFalse(assertEqual("Lighthouse Labs", "Bootcamp"));
  });

  it("should return true for two equal strings", () => {
    assert.isTrue(assertEqual("That's a spicy meatball", "That's a spicy meatball"));
  });

  it("should return true for two equal numbers", () => {
    assert.isTrue(assertEqual(1, 1));
  });

  it("should return false for two non-equal numbers", () => {
    assert.isFalse(assertEqual(42, 1991));
  });
});