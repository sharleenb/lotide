const assertEqual = require('./assertEqual');
const assertArraysEqual = require('./assertArraysEqual');

const takeUntil = function(array, callback) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i]) == false) {
      newArray.push(array[i]);
    } else {
      break; 
    }
  }
  return newArray;
}

module.exports = takeUntil;