const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(array1, array2) {
  for (let i=0; i < array1.length; i++)
    if (array1[i] !== array2[i]){
      return false
    } 
    return true
  }
  

const eqObjects = function(object1, object2) {
  const objArray1 = Object.keys(object1);
  const objArray2 = Object.keys(object2);
  let result = false;
  if (objArray1.length === objArray2.length) {
    for (const key of objArray1) {
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])){
        result = eqArrays(object1[key], object2[key])
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



const assertObjectsEqual = function(object1, object2) {
  const inspect = require('util').inspect
  const objArray1 = Object.keys(object1);
  const objArray2 = Object.keys(object2);
  let result = false;
  if (objArray1.length === objArray2.length) {
    for (const key of objArray1) {
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])){
        result = eqArrays(object1[key], object2[key])
      }
      else if (object1[key] === object2[key]) {
        result = true;
      } else {
        return false;
      }
    }
  }
  if (result === true) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`);
  }
  
}


//TEST

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium"};
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
//assertEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true); // => true

const longSleeveMultiColorShirtObject= { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
//assertEqual(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject), false); // => false

console.log(assertObjectsEqual(multiColorShirtObject, anotherMultiColorShirtObject));