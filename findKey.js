// The `findKey` function takes an object and a callback function as parameters.
function findKey(obj, callback) {
  // Iterate through the keys of the object.
  for (let key in obj) {
    // Check if the callback function returns a truthy value for the current key's value.
    if (callback(obj[key])) {
      // If a truthy value is found, return the current key.
      return key;
    }
  }
  // If no matching key is found, return undefined.
  return undefined;
}

module.exports = findKey;
