# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. It is meant to be a clone of the Lodash library, writing similar utility functions that can go a long way in future code writing.

## Usage

**Install it:**

`npm install @sharleenb/lotide`

**Require it:**

`const _ = require('@sharleenb/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* head: function takes in array and returns first element of array
* tail: function takes in array and returns everything except the first element of array
* middle: function takes in array and returns middle most element(s) of array
* countLetters: function that takes in a sentence and returns a count of each of the letters in the sentence
* countOnly: function that takes in a collection of items and returns a specific subset of those items
* eqArrays: function takes in 2 arrays and returns true if they are equal and false otherwise
* eqObjects: function takes in 2 objects and returns true if they are equal and false otherwise
* findKey: return corresponding key for passed in value that is an object
* findKeyByValue: function takes in object and value and returns the first key that corresponds to that value
* flatten: function that takes in an array that contains elements including nested arrays and returns a flattened verison of the array
* letterPositions: function that takes in a string and returns all indices of letter positions in the string
* map: function takes in array and callback and returns a new array based on the results of the callback on each item in the array
* takeUntil: function takes in an array and callback and returns a slice of the array based on the criteria specified in the callback
* without: function takes in a source array and itemsToRemove array and returns only the items from the source array that are not in the itemsToRemove array
* assertArraysEqual: function takes in 2 arrays and returns true if they are equal and false otherwise
* assertEqual: function takes in 2 values and returns true if they are equal and false otherwise