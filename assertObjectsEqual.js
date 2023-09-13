const assertObjectsEqual = function(actual, expected) {
  const actualKeys = Object.keys(actual);
  const expectedKeys = Object.keys(expected);

  // Check if the number of keys is the same
  if (actualKeys.length !== expectedKeys.length) {
    console.log(`🔴🔴🔴 Assertion Failed: Objects have different numbers of keys`);
    return false;
  }

  // Check if all keys and their values are equal
  for (const key of actualKeys) {
    if (actual[key] !== expected[key]) {
      console.log(`🔴🔴🔴 Assertion Failed: Objects are not equal`);
      return false;
    }
  }

  console.log(`✅✅✅ Assertion Passed: Objects are equal`);
  return true;
};


module.exports = assertObjectsEqual;
