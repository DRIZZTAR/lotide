const assert = require('chai').assert;
const countLetters = require('../countLetters');

const expectedOutput = {
  't': 2,
  'h': 1,
  'a': 2,
  's': 1,
  'm': 1,
  'o': 1,
  'r': 1,
  'e': 1
};

describe('countLetters', function() {
  it('should return the correct letter counts for a given sentence', function() {
    const result = countLetters("thats amore");
    assert.deepEqual(result, expectedOutput);
  });
});