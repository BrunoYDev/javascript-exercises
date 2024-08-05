const fibonacci = function (number) {
  let newNumber = Number(number);
  let a = 0, b = 1, temp;

  if (newNumber === 0) {
    return 0;
  }
  if (newNumber === 1) {
    return 1;
  }
  if(newNumber < -1){
    return "OOPS";
  }

  for(let i = 2; i<= newNumber; i++){
    temp = a + b;
    a = b;
    b = temp;
  }

  return b;
};
// console.time('Fibonacci')
// console.log(fibonacci(3))
// console.timeEnd('Fibonacci')

// Do not edit below this line
module.exports = fibonacci;


// function fibonacciRecursive(n) {
//     if (n === 0) return 0;
//     if (n === 1) return 1;
//     return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
//   }

// console.time('FibonacciRecursive')
// console.log(fibonacciRecursive(3))
// console.timeEnd('FibonacciRecursive')