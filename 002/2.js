/*
Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.
*/


var cache = [1, 2];
var fib = function (i) {
  if (!cache[i]) {
    cache[i] = fib(i - 1) + fib(i - 2);
  }
  return cache[i];
};

var evenSum = 0;
var i = 0;
var f = 0;
while (f < 4000000) {
  f = fib(i);
  i++;
  if (f % 2 === 0) {
    evenSum += f;
  }
}

console.log(evenSum);
