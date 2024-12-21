const fibonacci = function (number) {
  if (isNaN(number) || number < 0) {
    return "OOPS";
  }

  const fibonacciArray = [0, 1];

  for (let i = 0; fibonacciArray.length <= number; i++) {
    fibonacciArray.push(fibonacciArray[i] + fibonacciArray[i + 1]);
  }

  return fibonacciArray[number];
};

fibonacci(8);

// Do not edit below this line
module.exports = fibonacci;
