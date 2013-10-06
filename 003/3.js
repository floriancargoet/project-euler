/*
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?
*/

var factor = 2;
var n = 600851475143;
while (factor < n) {
  while (n % factor === 0) {
    console.log(n + ' / ' + factor + ' = ' + (n / factor));
    n /= factor;
  }
  factor++;
}

console.log(factor);
