const assertEqual = function(actual, expected) {
  const stringActual = actual.toString();
  const stringExpected = expected.toString();
  if (stringActual === stringExpected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

module.exports = assertEqual;