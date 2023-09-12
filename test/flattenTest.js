const assert = require('chai').assert;
const flatten = require('../flatten.js');

describe('flatten', function() {
  it('should flatten a nested array of strings', function() {
    const superHeros = ["Batman", "Spider-man", "Hulk"];
    const result1 = flatten([superHeros, ["Green Lantern", "Green Goblin"], "Venom"]);
    const expected1 = ["Batman", "Spider-man", "Hulk", "Green Lantern", "Green Goblin", "Venom"];
    assert.deepEqual(result1, expected1);
  });

  it('should flatten a nested array of numbers', function() {
    const test1 = flatten([1, 2, [3, 4], 5, [6]]);
    const expected1 = [1, 2, 3, 4, 5, 6];
    assert.deepEqual(test1, expected1);

    const test2 = flatten([42, 48, [1, 2, 3], 'Jamaica']);
    const expected2 = [42, 48, 1, 2, 3, 'Jamaica'];
    assert.deepEqual(test2, expected2);
  });
});