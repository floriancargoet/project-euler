/*
By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the 10 001st prime number?
*/

var primes = [];
var addIfPrime = function (n) {
  var sqrt = Math.sqrt(n);
  for (var i = 0; i < primes.length; i++) {
    var p = primes[i];
    if (p > sqrt) {
      break;
    }
    if (n % p === 0) {
      return false;
    }
  }
  primes.push(n);
  return true;
};

for (var i = 3; primes.length !== 10000; i+=2) {
  addIfPrime(i);
}

console.log(primes.pop());
