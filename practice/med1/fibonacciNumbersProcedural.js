console.log(fibonacci(20));       // 6765
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(75));       // 2111485077978050

console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(20));     // 6765

function fibonacci(nth) {
  if (nth <= 2) return 1;
  fibNum = 0;
  fib1 = 1;
  fib2 = 1;
  for (let i = 2; i < nth; i++) {
    fibNum = fib1 + fib2;
    fib2 = fib1;
    fib1 = fibNum; 
  }
  return fibNum;
}