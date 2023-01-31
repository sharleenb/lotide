const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(input){
  // create empty object
  // for each letter in string
    // if letter in object
      // add count + 1
    // if letter not yet in object
      // count is 1
  // return an object with the letter and how many times it appears in the string
}

console.log(assertEqual("lighthouse in the house", {l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1,}))