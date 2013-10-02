/*
Euler discovered the remarkable quadratic formula:

n² + n + 41

It turns out that the formula will produce 40 primes for the consecutive values n = 0 to 39. However, when n = 40, 402 + 40 + 41 = 40(40 + 1) + 41 is divisible by 41, and certainly when n = 41, 41² + 41 + 41 is clearly divisible by 41.

The incredible formula  n² − 79n + 1601 was discovered, which produces 80 primes for the consecutive values n = 0 to 79. The product of the coefficients, −79 and 1601, is −126479.

Considering quadratics of the form:

n² + an + b, where |a| < 1000 and |b| < 1000

where |n| is the modulus/absolute value of n
e.g. |11| = 11 and |−4| = 4
Find the product of the coefficients, a and b, for the quadratic expression that produces the maximum number of primes for consecutive values of n, starting with n = 0.
*/

var primes = [];
var cache = [];
var isPrime = function (n) {
  if (n < 3) return false;
  if (n in cache) return cache[n];
  var sqrt = Math.sqrt(n);
  for (var i = 0; i < primes.length; i++) {
    var p = primes[i];
    if (p > sqrt) {
      break;
    }
    if (n % p === 0) {
      cache[n] = false;
      return false;
    }
  }
  primes.push(n);
  cache[n] = true;
  return true;
};

var max = 0;
var maxI, maxJ;
for (var i = -999; i < 1000; i+=2)
for (var j = 1; j < 1000; j+=2) // j cannot be negative or it fails at f(0)
if(isPrime(j)) { // if j is not prime, it fails at f(0)
    var n = 0, result;
    do {
        result = n*n + i*n +j;
        n++;
    } while (result > 0 && isPrime(result));
    if (n > max) {
        max = n;
        maxI = i;
        maxJ = j;
    }
}
console.log(maxI * maxJ);