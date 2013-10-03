/*
A number chain is created by continuously adding the square of the digits in a number to form a new number until it has been seen before.

For example,

44 → 32 → 13 → 10 → 1 → 1
85 → 89 → 145 → 42 → 20 → 4 → 16 → 37 → 58 → 89

Therefore any chain that arrives at 1 or 89 will become stuck in an endless loop. What is most amazing is that EVERY starting number will eventually arrive at 1 or 89.

How many starting numbers below ten million will arrive at 89?
*/

function digits(n) {
  return String(n).split('').map(Number);
}

function squareSum(acc, digit) {
  return acc + digit * digit;
}

function next(n) {
  return digits(n).reduce(squareSum, 0);
}

var count = 0;
var cache = [];

for (var i = 1; i < 10000000; i++) {
  var j = i;
  while (j != 1 && j !=89) {
    if (cache[j]) { // shortcut
      j = cache[j];
      break;
    }
    j = next(j);
  }
  cache[i] = j;
  if (j == 89) count++;
}

console.log(count);
