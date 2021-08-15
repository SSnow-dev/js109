const readline = require("readline-sync");
const FEET_IN_A_METER = 3.2808;
const SQUARE_FEET_IN_A_METER = 10.7639;

let length = readline.question("Enter the length of the room in meters: ")
let width =  readline.question("Enter the width of the room in meters: ")
let areaInSquareMeters = length * width;
let areaInSquareFeet = areaInSquareMeters * SQUARE_FEET_IN_A_METER;
console.log(`The area of the room is ${areaInSquareMeters.toFixed(2)} square meters (${(areaInSquareFeet).toFixed(2)} square feet).`);