const assertEqual = require('./assertEqual');
const assertArraysEqual = require('./assertArraysEqual');

  const findKeyByValue = function(bestTVShowsByGenre, value) {
    let result = undefined;
    for (const key in bestTVShowsByGenre) {
      if (bestTVShowsByGenre[key] === value) {
        result = key;
      }
    }
    return result;
};
