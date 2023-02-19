const findKeyByValue = function(bestTVShowsByGenre, value) {
  let result = undefined;
  for (const key in bestTVShowsByGenre) {
    if (bestTVShowsByGenre[key] === value) {
      result = key;
    }
  }
  return result;
};

module.exports = findKeyByValue;