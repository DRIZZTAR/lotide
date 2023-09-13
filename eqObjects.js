const eqObjects = function(obj1, obj2) {
  // Get the keys of both objects
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  // Check if the number of keys is the same
  if (keys1.length !== keys2.length) {
    return false;
  }

  // Iterate through the keys
  for (const key of keys1) {
    const val1 = obj1[key];
    const val2 = obj2[key];

    // Check if both values are objects
    if (typeof val1 === 'object' && typeof val2 === 'object' && val1 !== null && val2 !== null) {
      // Recursively check nested objects
      if (!eqObjects(val1, val2)) {
        return false; // If nested objects are not equal, return false
      }
    } else if (val1 !== val2) {
      return false; // If values are not equal, return false
    }
  }

  // If all keys and values match, the objects are equal
  return true;
};

module.exports = eqObjects;

