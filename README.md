# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @drizztar/lotide`

**Require it:**

`const _ = require('@username/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

Certainly! Here's the documentation for the functions you provided:

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(arr1, arr2)`: Compares two arrays `arr1` and `arr2` and asserts whether they are equal, printing a message to the console.

* `assertEqual(actual, expected)`: Compares `actual` and `expected` values and asserts whether they are equal, printing a message to the console.

* `assertObjectsEqual(obj1, obj2)`: Compares two objects `obj1` and `obj2` and asserts whether they are equal, printing a message to the console.

* `countLetters(str)`: Counts the occurrences of each letter in a given string `str` and returns an object with letter counts.

* `countOnly(allItems, itemsToCount)`: Counts the occurrences of specified items in an array `allItems` based on the criteria specified in `itemsToCount` and returns an object with item counts.

* `eqArrays(arr1, arr2)`: Compares two arrays `arr1` and `arr2` and returns `true` if they are equal, `false` otherwise.

* `eqObjects(obj1, obj2)`: Compares two objects `obj1` and `obj2` and returns `true` if they are equal, `false` otherwise.

* `findKey(obj, callback)`: Searches for a key in an object `obj` based on the provided callback function `callback` and returns the first key for which the callback returns `true`.

* `findKeyByValue(obj, value)`: Searches for a key with a specified `value` in an object `obj` and returns the key if found, or `undefined` if not found.

* `flatten(arr)`: Flattens a nested array `arr` and returns a flattened one-dimensional array.

* `head(arr)`: Returns the first element of an array `arr`.

* `letterPositions(str)`: Returns an object with the positions of each letter in a given string `str`.

* `map(arr, callback)`: Applies a callback function `callback` to each element in an array `arr` and returns a new array with the results.

* `middle(arr)`: Returns the middle element(s) of an array `arr`.

* `tail(arr)`: Returns a new array containing all elements of the input array `arr` except for the first element.

* `takeUntil(arr, callback)`: Returns a new array with elements from the beginning of the input array `arr` until the callback function `callback` returns `true`.

* `without(source, itemsToRemove)`: Returns a new array containing all elements from the `source` array except for those specified in `itemsToRemove`.