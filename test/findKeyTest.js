const assert = require('chai').assert;
const findKey = require('../findKey');

const superheroes = {
  "Superman": { timesWorldSaved: 100, height: "6'3\"" },
  "Batman": { timesWorldSaved: 50, height: "6'2\"" },
  "Spider-man": { timesWorldSaved: 75, height: "5'10\"" },
  "Wonder Woman": { timesWorldSaved: 90, height: "6'0\"" },
  "The Flash": { timesWorldSaved: 60, height: "6'0\"" },
  "Aquaman": { timesWorldSaved: 70, height: "6'1\"" }
};

describe('findKey', () => {
  it('should return undefined when called on an empty object', () => {
    const emptyObj = {};
    const result = findKey(emptyObj, x => x === 1);
    assert.isUndefined(result);
  });

  it('should return the first key that meets the specified condition', () => {
    const result = findKey(superheroes, x => x.timesWorldSaved === 100);
    assert.equal(result, "Superman");
  });

  it('should return the last key that meets the specified condition', () => {
    const result = findKey(superheroes, x => x.timesWorldSaved === 70);
    assert.equal(result, "Aquaman");
  });

  it('should return the first key when multiple keys meet the specified condition', () => {
    const result = findKey(superheroes, x => x.timesWorldSaved > 50);
    assert.equal(result, "Superman");
  });

  it('should return undefined when no keys meet the specified condition', () => {
    const result = findKey(superheroes, x => x.timesWorldSaved > 200);
    assert.isUndefined(result);
  });
});
