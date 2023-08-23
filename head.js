
// FUNCTION IMPLEMENTATION

function head(array) {
  return array[0]; 
}

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴Assertion Failed: ${actual} !== ${expected}`);
  }

};

//TEST CODE

assertEqual(head(["Spidey-sense", "Web swinging", "Radio active blood"]), "Spidey-sense");
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([1982,2023,1400]), 2001);