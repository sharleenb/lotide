const assertEqual = require('../assertEqual'); 
const tail = require('../tail');

const input = ["Yo Yo", "Lighthouse", "Labs"];
assertEqual(tail(input), ["Lighthouse", "Labs"]);

