//countLetters
// Define a function called countLetters that takes a string as input
const countLetters = function(string) {
  // Create an empty object to store letter counts
  const letterCounts = {};

  // Loop through each character (char) in the string
  for (const char of string) {
    //We dont want spaces returned so if char is not a space....
    if (char !== ' ') {
      /* if char is already a key in letterCounts increment its value by 1.
      If key has not been added we will need to catch it in the else statement which will create the key, and initialize it to 1*/
      if (letterCounts[char]) {
        //increment value by one for key [char]
        letterCounts[char]++;
      } else {
        //creating key and initializing value at 1
        letterCounts[char] = 1;
      }
    }
  }
  //return object letterCounts containing key/value pairs :)!
  return letterCounts;
};

module.exports = countLetters;