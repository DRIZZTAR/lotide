const assert = require('chai').assert;
const map = require('../map');

describe('map', () => {
  it('should map an array to another array of their first letters', () => {
    const string = ["Spiderman", "Batman", "Superman", "Wonder Woman"];
    const firstLetters = map(string, hero => hero[0]);
    assert.deepEqual(firstLetters, ["S", "B", "S", "W"]);
  });

  it('should map an array, to another array of the elements lengths', () => {
    const funnyWords = ["flibbertigibbet", "gobbledygook", "hocus-pocus", "mumbo jumbo"];
    const lengths = map(funnyWords, word => word.length);
    assert.deepEqual(lengths, [15, 12, 11, 11]);
  });

  it('should map an array to another array of their last letters', () => {
    const string2 = ["Iron Man", "Captain America", "Thor"];
    const lastLetters = map(string2, hero => hero[hero.length - 1]);
    assert.deepEqual(lastLetters, ["n", "a", "r"]);
  });
});
