const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');


const eqObjects = function(object1, object2) {
  const objArray1 = Object.keys(object1);
  const objArray2 = Object.keys(object2);
  let result = false;
  if (objArray1.length === objArray2.length) {
    for (const key of objArray1) {
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        result = eqArrays(object1[key], object2[key]);
      }
      else if (object1[key] === object2[key]) {
        result = true;
      } else {
        return false;
      }
    }
  }
  return result;
};

module.exports = eqObjects;
