const takeUntil = function(array, callback) {
  const result = [];
  let conditionMet = false; // Flag to check if the condition is met
  // Iterate through each item/element in the array
  for (const item of array) {
    // Check if callback function returns true for the current item
    if (callback(item)) {
      // If true, set the flag and break out of the loop
      conditionMet = true;
      break;
    }
    // If callback was false for the current item, push the item to the result array
    result.push(item);
  }
  // If the condition was never met, return an empty array
  return conditionMet ? result : [];
};

module.exports = takeUntil;

