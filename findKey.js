//function findKey
//Function takes in an object and callback function as parameters
function findKey(obj, callback) {
  //scan the objects keys
  for (let key in obj) {
    //scan keys to see if they return a truthy value that returns a truthy value
    if (callback(obj[key])) {
      return key;
    }
  }
  return undefined;
}

module.exports = findKey;