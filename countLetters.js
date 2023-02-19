const assertEqual = require('./assertEqual');

const countLetters = function(input) {
  const result = {};
  for (const letter of input) {
    if (letter !== ' ') {
      if(result[letter]) {
        result[letter] += 1;
      } else {
        result[letter] = 1;
      }
    }
  }
  return result
};

module.exports = countLetters;