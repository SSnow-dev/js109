const readline = require("readline-sync");

let integer = Number(readline.question("Please enter an integer greater than 0: "));
let choice;
while (choice !== 's' && choice !== 'p') {
  choice = readline.question(`Enter "s" to compute the sum, or "p" to compute the product.`);
}

let numbers = [];

for (num = 1; num <= integer; num++) {
  numbers.push(num);
}

let total = numbers.reduce((accum, current) => {
  if (choice === 's') {
    return accum + current;
  } else if (choice === 'p') {
    return accum * current;
  }
});

console.log(total);