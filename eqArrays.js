const eqArrays = function(actual, expected) {
  // CHeck if arrays have same length, return false if !==
  if (actual.length !== expected.length) {
    return false;
  }
  //Loop through elements in arrays to see if they !==
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      return false;
    }
  }
  //Because our arrays have the same length and we've checked their elements by looping through, they will be === and true can be returned
  return true;
};

// TEST CODE
eqArrays([42, 42, 42], [42, 42, 42]); // true
eqArrays([1, 2, 3], [3, 2, 1]); // false
eqArrays(["Batman", "Spider-man", "Hulk"], ["Batman", "Green Goblin", "Hulk"]); // false
eqArrays(["Batman", "Spider-man", "Hulk"], ["Batman", "Spider-man", "Hulk"]); // true