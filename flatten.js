const flatten = function(nestedArray) {
  // Create an empty array for the new flattened array
  const flattened = [];
  // Loop through elements and look for arrays
  for (let i = 0; i < nestedArray.length; i++) {
    if (Array.isArray(nestedArray[i])) {
      // Loop through nested array's elements if found and add both nested and unnested elements to flattened with push
      for (let j = 0; j < nestedArray[i].length; j++) {
        flattened.push(nestedArray[i][j]);
      }
    } else {
      flattened.push(nestedArray[i]);
    }
  }
  // Return the new flattened array
  return flattened;
};

module.exports = flatten;

