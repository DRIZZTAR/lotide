const assert = require('chai').assert;
const head = require('../head.js');


describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });

  it("returns 'bananas' for ['bananas', 'pear', 'apple']", () => {
    assert.strictEqual(head(['bananas', 'pear', 'apple']), 'bananas');
  });
});

