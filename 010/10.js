/*
The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

Find the sum of all the primes below two million.
*/


var primes = [];
var isPrime = function (n) {
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

var sum = 2;
for (var i = 3; i < 2e6; i+=2) {
  if (isPrime(i)) {
    sum += i;
  }
}

console.log(sum);
