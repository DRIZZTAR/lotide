const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

describe('findKeyByValue', function() {
  const starWarsCharacters = {
    luke: 'Jedi',
    leia: 'Princess',
    han: 'Smuggler',
    darth: 'Sith',
    yoda: 'Jedi',
    boba: 'Bounty Hunter'
  };

  it('should return the key for the value "Jedi"', function() {
    const result = findKeyByValue(starWarsCharacters, 'Jedi');
    assert.equal(result, 'luke'); // Luke is a Jedi
  });

  it('should return the key for the value "Princess"', function() {
    const result = findKeyByValue(starWarsCharacters, 'Princess');
    assert.equal(result, 'leia'); // Leia is a Princess
  });

  it('should return the key for the value "Sith"', function() {
    const result = findKeyByValue(starWarsCharacters, 'Sith');
    assert.equal(result, 'darth'); // Darth is a Sith
  });

  it('should return undefined for a value not in the object', function() {
    const result = findKeyByValue(starWarsCharacters, 'Rebel');
    assert.isUndefined(result); // "Rebel" is not in the object
  });
});
