// findKeyByValue takes in object and value as parameters
const findKeyByValue = function(object, value) {
  //we set a variable to undefined because we have not found a key yet
  //If we find no key found key will remain undefined
  let foundKey = undefined;
  //loop through object using the Object.keys method. a variable key will be initialized to store the key of object, it will loop through until
  for (const key of Object.keys(object)) {
    //if object[key]'s associated value is === value
    if (object[key] === value) {
      //assign that key to found key
      foundKey = key;
      //exit loop
      break;
    }
  }
  //return foundKeyvariable
  return foundKey;
};

module.exports = findKeyByValue;