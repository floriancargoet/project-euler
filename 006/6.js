/*
The sum of the squares of the first ten natural numbers is,

1^2 + 2^2 + ... + 10^2 = 385
The square of the sum of the first ten natural numbers is,

(1 + 2 + ... + 10)^2 = 55^2 = 3025
Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 - 385 = 2640.

Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
*/

var crossProduct = 0;
var max = 100;
for (var i = 1; i <= max; i++) {
  for (var j = 1; j <= max; j++) {
     if (i !== j) {
      crossProduct += i*j;
     }
  }
}

console.log(crossProduct);
