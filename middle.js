const middle = function(array) {
  const middleElements = [];

  if (array.length <= 2) {
    return middleElements;
  } else if (array.length % 2 === 1) {
    const middleIndex = Math.floor(array.length / 2);
    middleElements.push(array[middleIndex]);
  } else {
    const middleIndex1 = (array.length / 2 - 1);
    const middleIndex2 = (array.length / 2);
    middleElements.push(array[middleIndex1], array[middleIndex2]);
  }

  return middleElements;
};

module.exports = middle;