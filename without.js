const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const without = function(source, itemsToRemove){
  const newArray = []
  for (let i = 0; i < source.length; i++) {
    let match = false
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (itemsToRemove[j] === source[i]) {
        match = true
      }
    }
    if (match == false) {
      newArray.push(source[i])
    }
  }
  return newArray
}

console.log(without([1, 2, 3], [1]))

