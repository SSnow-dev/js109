console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150

function sumSquareDifference(count) {
  return ((countSum(count)**2) - squareSum(count));

  function countSum(count) {
    result = 0;
    for (let i = 1; i <= count; i++) {
      result += i;
    }
    return result;
  }

  function squareSum(count) {
    result = 0;
    for (let i = 1; i <= count; i++) {
      result = result + i**2;
    }
    return result;
  }
}