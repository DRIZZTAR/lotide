const letterPositions = function(sentence) {
  // Initialize an empty object to store letter positions.
  const letterPositions = {};

  // Iterate through each character in the sentence.
  for (let i = 0; i < sentence.length; i++) {
    const char = sentence[i];

    // Skip spaces in the sentence.
    if (char !== ' ') {
      // If the character is already in the `letterPositions` object,
      // append the current position to its existing array.
      if (letterPositions[char]) {
        letterPositions[char].push(i);
      } else {
        // If the character is not yet in the `letterPositions` object,
        // create a new array with the current position as its first element.
        letterPositions[char] = [i];
      }
    }
  }

  // Return the `letterPositions` object containing character positions.
  return letterPositions;
};

module.exports = letterPositions;

