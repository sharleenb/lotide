const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const assertArraysEqual = function(array1, array2) {
  let match = true
  for (let i=0; i < array1.length; i++)
    if (array1[i] !== array2[i]){
      match = false
    } 
    if (match === false) {
      console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`)
    } else {
      console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`)
    }
  }

  
const letterPositions = function(sentence) {
  const results = {};
  
  return results;
};

assertArraysEqual(letterPositions("hello").e, [1]);