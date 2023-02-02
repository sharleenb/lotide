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

// const shirtObject = { color: "red", size: "medium"};
// const anotherShirtObject = { size: "medium", color: "red" };
// assertEqual(eqObjects(shirtObject, anotherShirtObject), true);

// const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
// assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false);

// console.log(eqObjects(shirtObject , anotherShirtObject));

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium"};
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
assertEqual(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject), true); // => true

const longSleeveMultiColorShirtObject= { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
assertEqual(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject), false); // => false

console.log(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject));