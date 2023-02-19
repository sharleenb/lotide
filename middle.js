const middle = function(input) {
    const result = [];
    const calc = (input.length/2) - 1;
    const halfway = Math.floor(input.length/2);
    if (input.length % 2 === 0) {
      result.push(input[calc], input[halfway]);
    } else if(input.length % 2 !== 0) {
      result.push(input[halfway]);
    } else if (input.length < 3) {
      result = [];
    }
    return result;
};
  
module.exports = middle;
