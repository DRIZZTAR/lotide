const assertArraysEqual = require('../assertArraysEqual');

// Test cases for assertArraysEqual

// Test case 1: Comparing two non-array strings (should fail)
assertArraysEqual("Lighthouse Labs", "Bootcamp");

// Test case 2: Comparing two non-array strings (should pass)
assertArraysEqual("That's a spicy meatball", "That's a spicy meatball");

// Test case 3: Comparing two arrays with equal content (should pass)
assertArraysEqual([1], [1]);

// Test case 4: Comparing two arrays with different content (should fail)
assertArraysEqual([42], [1991]);