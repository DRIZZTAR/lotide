const assert = require('chai').assert;
const takeUntil = require('../takeUntil.js');

describe('#takeUntil', () => {
  it('should return a slice of the array until a callback condition is met (X-Men)', () => {
    const mutants = ['Wolverine', 'Cyclops', 'Storm', 'Beast', 'Jean Grey'];
    const callback = (mutant) => mutant === 'Beast';
    const result = takeUntil(mutants, callback);
    assert.deepEqual(result, ['Wolverine', 'Cyclops', 'Storm']);
  });

  it('should return an empty array if callback condition is never met (X-Men)', () => {
    // Define an array of X-Men mutants
    const mutants = ['Professor X', 'Magneto', 'Rogue', 'Gambit', 'Nightcrawler'];
    // Define a callback function that will never match any element in the mutants array
    const callback = (mutant) => mutant === 'Mystique';
    // Call the takeUntil function with the mutants array and the callback
    const result = takeUntil(mutants, callback);
    // Assert that the result should be an empty array, as the callback condition is never met
    assert.deepEqual(result, []);
  });

  it('should return a slice of the array until a callback condition is met (X-Men - villains)', () => {
    const villains = ['Magneto', 'Juggernaut', 'Sabretooth', 'Mystique', 'Sentinel'];
    const callback = (villain) => villain === 'Mystique';
    const result = takeUntil(villains, callback);
    assert.deepEqual(result, ['Magneto', 'Juggernaut', 'Sabretooth']);
  });
});
