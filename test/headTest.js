const head = require('../head.js');
const assertEqual = require('../assertEqual');

assertEqual(head(["Spidey-sense", "Web swinging", "Radio active blood"]), "Spidey-sense");
assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([2001, 2023, 1400]), 2001);