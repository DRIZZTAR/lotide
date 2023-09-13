const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

describe('letterPositions', function() {
  it('should return letter positions for "leonardo"', function() {
    const result = letterPositions("leonardo");
    const expected = {
      'l': [0],
      'e': [1],
      'o': [2, 7],
      'n': [3],
      'a': [4],
      'r': [5],
      'd': [6]
    };

    assert.deepEqual(result, expected);
  });

  it('should return letter positions for "donatello"', function() {
    const result = letterPositions("donatello");
    const expected = {
      'd': [0],
      'o': [1, 8],
      'n': [2],
      'a': [3],
      't': [4],
      'e': [5],
      'l': [6, 7]
    };

    assert.deepEqual(result, expected);
  });

  it('should return letter positions for "raphael"', function() {
    const result = letterPositions("raphael");
    const expected = {
      'r': [0],
      'a': [1, 4],
      'p': [2],
      'h': [3],
      'e': [5],
      'l': [6]
    };

    assert.deepEqual(result, expected);
  });

  it('should return letter positions for "michaelangelo"', function() {
    const result = letterPositions("michaelangelo");
    const expected = {
      'm': [0],
      'i': [1],
      'c': [2],
      'h': [3],
      'a': [4, 7],
      'e': [5, 10],
      'l': [6, 11],
      'n': [8],
      'g': [9],
      'o': [12]
    };

    assert.deepEqual(result, expected);
  });
});

