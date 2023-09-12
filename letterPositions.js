//letterPositions
const letterPositions = function(sentence) {
  //create an empty object to store our keys(letters), and our values[indexes]
  const letterPositions = {};
  // Loop through each character (char) in the sentence and its index i
  for (let i = 0; i < sentence.length; i++) {
    const char = sentence[i];
    //We dont want spaces returned so if char is not a space....
    if (char !== ' ') {
      /* if char is already a key in letterPositions push the current index to its array.
      If key has not been added we will need to catch it in the else statement which will create the key, and initialize its first value*/
      if (letterPositions[char]) {
        //add index position to key
        letterPositions[char].push(i);
      } else {
        //creating key and initialize its value/index
        letterPositions[char] = [i];
      }
    }
  }
  //return object letterPositions containing key/value pairs :);)!
  return letterPositions;
};

//assertArraysEqual
const assertArraysEqual = function(actual, expected) {
  // Check if arrays have same length, return false if !==
  if (actual.length !== expected.length) {
    console.log(`🔴🔴🔴Assertion Failed: ${actual} !== ${expected}`);
    return;
  }
  // Loop through elements in arrays to see if they !==
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      console.log(`🔴🔴🔴Assertion Failed: ${actual} !== ${expected}`);
      return;
    }
  }
  // We now know that the arrays are equal. We can now console.log to output to the console
  console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
};

//eqArrays
const eqArrays = function(actual, expected) {
  // CHeck if arrays have same length, return false if !==
  if (actual.length !== expected.length) {
    return false;
  }
  //Loop through elements in arrays to see if they !==
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      return false;
    }
  }
  //Because our arrays have the same length and we've checked their elements by looping through, they will be === and true can be returned
  return true;
};

//Tests

//we need to loop through our result to show our arrays of indexes attached to the keys(letters in string)
const result = letterPositions("thats amore");
//for each key in result(which is given the value of  function("thats amore")
for (const key in result) {
  //log each key and a array of indexes(values)
  console.log(key + ": " + result[key]);
}

//Using assertArraysEqual to test if our expected outcome is the same as wht our letterPossitions function does to "hello"
const test = letterPositions("hello");
assertArraysEqual(test['h'], [0]);
assertArraysEqual(test['e'], [1]);
assertArraysEqual(test['l'], [2]);// This fails because 'l' appears twice in hello and its value pair is 2,3(for the indexes it shows up in) we checked if it === 2
assertArraysEqual(test['o'], [4]);
//easier way to check the ame test
assertArraysEqual(letterPositions("hello").e, [1]);

// Test 1
//give result 1 the value of letter postions being passed the string hello
const result1 = letterPositions("hello");
//give our expected result its number we want to test against the index being returned from h
const expectedResult1 = [0];
//if h(key) has a value of 0 or === expectedResult1 / then log pass/fail
if (eqArrays(result1['h'], expectedResult1)) {
  console.log(`Test 1 passed: ${result1['h']} === ${expectedResult1}`);
} else {
  console.log(`Test 1 failed: expected ${expectedResult1}, but got ${result1['h']}`);
}

// Test 2
const result2 = letterPositions("hello");
const expectedResult2 = [2, 3];
if (eqArrays(result2['l'], expectedResult2)) {
  console.log(`Test 2 passed: ${result2['l']} === ${expectedResult2}`);
} else {
  console.log(`Test 2 failed: expected ${expectedResult2}, but got ${result2['l']}`); //passes because l has the value of 2, 3 / l: 2, 3
}


