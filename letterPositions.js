const letterPositions = function(sentence) {
  const letterPositions = {};
  for (let i = 0; i < sentence.length; i++) {
    const char = sentence[i];
    if (char !== ' ') {
      if (letterPositions[char]) {
        letterPositions[char].push(i);
      } else {
        letterPositions[char] = [i];
      }
    }
  }
  return letterPositions;
};


module.exports = letterPositions;

