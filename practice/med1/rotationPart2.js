console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917

//Solution 1
// function rotateRightmostDigits(number, count) {
//   let array = number.toString().split('').map(digit => digit);
//   let numberToRotate = array.splice(array.length - count, 1);
//   let rotatedArray = [...array, ...numberToRotate];
//   return Number(rotatedArray.join(''));
// }

//Solution 2
function rotateRightmostDigits(number, count) {
  let numberString = number.toString();
  let firstPart = numberString.slice(0, numberString.length - count);
  let secondPart = numberString.slice(numberString.length - count);
  return Number(firstPart + rotateString(secondPart));
}

function rotateString(string) {
  return string.slice(1) + string[0];
}