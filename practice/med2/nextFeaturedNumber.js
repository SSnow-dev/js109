console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(9876543186));   // 9876543201
console.log(featured(9876543200));   // 9876543201
console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."

function featured(num) {
  if (num >= 9876543201) return "No possible number."
  let number = num + 1;

  while (!isOddMultipleOf7(number)) {
    number++;
  }

  while (number % 2 !== 1 || !areDigitsUnique(number)) {
    number += 14;
  }

  return number;

  //Helper functions
  function isOddMultipleOf7(testNum) {
    if (testNum % 2 === 1 && testNum % 7 === 0) {
      return true;
    } else return false;
  }

  function areDigitsUnique(testNum) {
    const arr = testNum.toString().split('').sort();
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] === arr[i+1]) return false;
    }
    return true;
  }
}
