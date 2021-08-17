const readline = require("readline-sync");

let bill = Number(readline.question("What is the bill? "));
let tipPercent = Number(readline.question("What is the tip percentage? "));
let tipAmmount = Number((tipPercent / 100) * bill);

console.log(`The tip is: $${tipAmmount.toFixed(2)}`);
console.log(`The total is: $${(tipAmmount + bill).toFixed(2)}`);
