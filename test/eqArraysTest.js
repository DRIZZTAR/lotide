const eqArrays = require('../eqArrays.js');
const assertEqual = require('../assertEqual.js');

// TEST CASES
assertEqual(eqArrays([42, 42, 42], [42, 42, 42]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
assertEqual(eqArrays(["Batman", "Spider-man", "Hulk"], ["Batman", "Green Goblin", "Hulk"]), false);
assertEqual(eqArrays(["Batman", "Spider-man", "Hulk"], ["Batman", "Spider-man", "Hulk"]), true);