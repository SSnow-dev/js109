console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845

function maxRotation(number) {
  let numberLength = number.toString().length;
  for(let digit = numberLength; digit > 0; digit--) {
    number = rotateRightmostDigits(number, digit);
  }
  return number;
}

function rotateRightmostDigits(number, count) {
  numberString = number.toString();
  let firstPart = numberString.slice(0, numberString.length - count);
  let secondPart = numberString.slice(numberString.length - count, numberString.length);

  return Number(firstPart + rotateString(secondPart));
}

function rotateString(string) {
  return string.slice(1) + string[0];
}
