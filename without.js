const without = function(source, itemsToRemove) {
  let newArray = [];
  // Loop through source to check if any elements are in itemsToRemove
  for (let i = 0; i < source.length; i++) {
    // If element is NOT included in itemsToRemove, push it to newArray
    if (!itemsToRemove.includes(source[i])) {
      newArray.push(source[i]);
    }
  }
  // Return newArray after we've looped through the source array
  return newArray;
};

module.exports = without;
