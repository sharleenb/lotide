const assertEqual = function(actual, expected) {
  const stringActual = actual.toString();
  const stringExpected = expected.toString();
  if (stringActual === stringExpected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(input) {
  return input.slice(1);
};

const input = ["Yo Yo", "Lighthouse", "Labs"];
console.log(tail(input));
assertEqual(tail(input), ["Lighthouse", "Labs"]);

