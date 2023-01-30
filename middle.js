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

  const middle = function(input){
    const result = []
    const calc = (input.length/2) - 1
    const halfway = Math.floor(input.length/2)
    if (input.length % 2 === 0){
      result.push(input[calc], input[halfway])
    } else if(input.length % 2 !== 0){
      result.push(input[halfway])
    } else if (input.length < 3){
      result = []
    }
    return result 
  }
  
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]))
