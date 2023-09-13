const middle = function(array) {
  // Initialize an empty array to store the middle elements.
  const middleElements = [];

  // Check if the input array has 2 or fewer elements.
  if (array.length <= 2) {
    // If it does, return an empty array as there are no middle elements.
    return middleElements;
  } else if (array.length % 2 === 1) {
    // If the input array has an odd number of elements,
    // calculate the index of the single middle element.
    const middleIndex = Math.floor(array.length / 2);

    // Push the middle element to the `middleElements` array.
    middleElements.push(array[middleIndex]);
  } else {
    // If the input array has an even number of elements,
    // calculate the indices of the two middle elements.
    const middleIndex1 = (array.length / 2 - 1);
    const middleIndex2 = (array.length / 2);

    // Push both middle elements to the `middleElements` array.
    middleElements.push(array[middleIndex1], array[middleIndex2]);
  }

  // Return the `middleElements` array containing middle element(s).
  return middleElements;
};

module.exports = middle;

module.exports = middle;