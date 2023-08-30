//assertEqual
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴Assertion Failed: ${actual} !== ${expected}`);
  }

};

// findKeyByValue takes in object and value as parameters
const findKeyByValue = function(object, value) {
  //we set a variable to undefined because we have not found a key yet
  //If we find no key found key will remain undefined
  let foundKey = undefined;
  //loop through object using the Object.keys method. a variable key will be initialized to store the key of object, it will loop through until
  for (const key of Object.keys(object)) {
    //if object[key]'s associated value is === value
    if (object[key] === value) {
      //assign that key to found key
      foundKey = key;
      //exit loop
      break;
    }
  }
  //return foundKeyvariable
  return foundKey;
};

// Object

const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire",
  reality: "Big Brother",
  classic: "Gilligans Island"
};

// Tests

//we are expecting The Wire to give us the key drama which it does / Pass
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
//We are looking for the key of that 70s show but it isnt defined in bestTvShowsByGenre, we are expecting undefined so it passes
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
//passes because gilligans island key === classic
assertEqual(findKeyByValue(bestTVShowsByGenre, "Gilligans Island"), "classic");
//fails because the key for Big Brother does not equal null
assertEqual(findKeyByValue(bestTVShowsByGenre, "Big Brother"), null);