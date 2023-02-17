const assertEqual = require('./assertEqual');

const without = function(source, itemsToRemove) {
  const newArray = [];
  for (let i = 0; i < source.length; i++) {
    let match = false;
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (itemsToRemove[j] === source[i]) {
        match = true;
      }
    }
    if (match == false) {
      newArray.push(source[i]);
    }
  }
  return newArray;
}



