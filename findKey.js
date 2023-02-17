const assertEqual = require('./assertEqual');

const findKey = function(object1, callback) {
  let result = undefined;
  for (const key in object1) {
    if (callback(object1[key]) === true) {
      result = key;
      break;
    }
  }
  return result;
};
