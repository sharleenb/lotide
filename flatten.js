const flatten = function(input) {
  let newArray = []
  for (let i = 0; i < input.length; i++){
    if (Array.isArray(input[i])) {
      for (const element of input[i]){
        newArray.push(element)
      }
    } else {
      newArray.push(input[i])
    }
  }
  return newArray

}

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

console.log(assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]))

