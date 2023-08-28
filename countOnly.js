// assertEqual function
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴Assertion Failed: ${actual} !== ${expected}`);
  }

};
//countOnly function
const countOnly = function(allItems, itemsToCount) {
  //Create empty object to store new key, and value pairs
  const results = {};

  for (const item of allItems) {
    if (itemsToCount[item]) { 
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }

  // Return the results object
  return results;
};

//allItems: an array of strings that we need to look through
allItems = ["a", "a", "b", "c", "d", "e", "a"]
//itemsToCount: an object specifying what to count
itemsToCount = {
  a: true,
  d: true,
  b: false,
  f: true
}

const results = countOnly(allItems, itemsToCount);
console.log(results);

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

//Checking if the count of Jason in firstNames is = to 1, should return true and pasds assertEqual
assertEqual(result1["Jason"], 1);
//checking if Karima is not in result 1, it passes because karima being undefned in firstNamesis true
assertEqual(result1["Karima"], undefined);
//CHecking if Fang is found 2 times in firstNames, assertEqual should pass and retrun true
assertEqual(result1["Fang"], 2);
//Checking if Agouhanna is !== to false in firstNames. It passes because Agouhanna being undefined is false
assertEqual(result1["Agouhanna"], undefined);
