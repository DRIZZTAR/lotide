// assertEqual
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴Assertion Failed: ${actual} !== ${expected}`);
  }

};


//function findKey
//Function takes in an object and callback function as parameters
function findKey(obj, callback) {
  //scan the objects keys
  for (let key in obj) {
    //scan keys to see if they return a truthy value that returns a truthy value
    if (callback(obj[key])) {
      return key;
    }
  }
  return undefined;
}

const superheroes = {
  "Superman": { timesWorldSaved: 100, height: "6'3\"" },
  "Batman": { timesWorldSaved: 50, height: "6'2\"" },
  "Spider-man": { timesWorldSaved: 75, height: "5'10\"" },
  "Wonder Woman": { timesWorldSaved: 90, height: "6'0\"" },
  "The Flash": { timesWorldSaved: 60, height: "6'0\"" },
  "Aquaman": { timesWorldSaved: 70, height: "6'1\"" }
};

// Test case 1: No key found
const emptyObj = {};
const noKeyFound = findKey(emptyObj, x => x === 1);
assertEqual(noKeyFound, undefined);

// Test case 2: First key found
const firstKeyFound = findKey(superheroes, x => x.timesWorldSaved === 100);
assertEqual(firstKeyFound, "Superman");

// Test case 3: Last key found
const lastKeyFound = findKey(superheroes, x => x.timesWorldSaved === 70);
assertEqual(lastKeyFound, "Aquaman");

// Test case 4: Multiple keys found
const multipleKeysFound = findKey(superheroes, x => x.timesWorldSaved > 50);
assertEqual(multipleKeysFound, "Superman");