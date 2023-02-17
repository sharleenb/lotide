
const eqArrays = require('./eqArrays');

const assertArraysEqual = function(array1, array2) {
  let result = `✅✅✅ Assertion Passed: ${array1} === ${array2}`;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]){
      result = `🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`;
    } 
  }
    return result
};
  
module.exports = assertArraysEqual;