const assert = require('chai').assert;
const countOnly = require('../countOnly');

// Test case 1: Count specific elements
describe('countOnly', function() {
  const allItems = ["a", "a", "b", "c", "d", "e", "a"];
  const itemsToCount = {
    a: true,
    d: true,
    b: false,
    f: true
  };

  it('should return a specific elements based on the condition', function() {
    const results = countOnly(allItems, itemsToCount);

    assert.equal(results['a'], 3, 'Count of "a" should be 3');
    assert.equal(results['d'], 1, 'Count of "d" should be 1');
    assert.isUndefined(results['b'], 'Count of "b" should be undefined');
    assert.isUndefined(results['f'], 'Count of "f" should be undefined');
  });
});

// Test case 2: Check for items not in the result
describe('countOnly', function() {
  const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe"
  ];

  it('should return undefined for items not in the result', function() {
    const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

    assert.isUndefined(result1['Karima'], 'Result for "Karima" should be undefined');
    assert.isUndefined(result1['Agouhanna'], 'Result for "Agouhanna" should be undefined');
  });
});

// Test case 3: Check counts for items in the result
describe('countOnly', function() {
  const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe"
  ];

  it('should return the correct counts for items in the result', function() {
    const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

    assert.equal(result1['Jason'], 1, 'Count of "Jason" should be 1');
    assert.equal(result1['Fang'], 2, 'Count of "Fang" should be 2');
  });
});