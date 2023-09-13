//take in 2 arguments 1 an array to map, 2 a callback function
const map = function(array, callback) {
  //initialize empty variable with an empty array
  const results = [];
  //loop through array
  for (let item of array) {
    //callback function call on item in array, push to results array
    results.push(callback(item));
  }
  return results;
};

module.exports = map;