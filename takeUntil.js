const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const assertArraysEqual = function(array1, array2) {
  let match = true
  for (let i = 0; i < array1.length; i++)
    if (array1[i] !== array2[i]){
      match = false
    } 
    if (match === false) {
      console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`)
    } else {
      console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`)
    }
  }

const takeUntil = function(array, callback) {
  const newArray = []
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i]) == false) {
      newArray.push(array[i])
    } else {
      break 
    }
  }
  return newArray
}

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);
console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

console.log(assertArraysEqual(takeUntil(data1, x => x < 0), [ 1, 2, 5, 7, 2 ]));
console.log(assertArraysEqual(takeUntil(data2, x => x === ','), [ "I've", 'been', 'to', 'Hollywood' ]))