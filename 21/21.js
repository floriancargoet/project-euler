/*
Let d(n) be defined as the sum of proper divisors of n (numbers less than n which divide evenly into n).
If d(a) = b and d(b) = a, where a ≠ b, then a and b are an amicable pair and each of a and b are called amicable numbers.

For example, the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 and 110; therefore d(220) = 284. The proper divisors of 284 are 1, 2, 4, 71 and 142; so d(284) = 220.

Evaluate the sum of all the amicable numbers under 10000.
*/

function sum(a, b) {
  return a + b;
}
function div(n) {
  var divisors = [1];
  var sqrt = Math.sqrt(n);
  for (var i = 2; i <= sqrt; i++) {
    if (n % i === 0) {
      divisors.push(i);
      if (i != sqrt) {
        divisors.push(n/i);
      }
    }
  }
  return divisors;
}
function d(n) {
  return div(n).reduce(sum, 0);
}

var amicable = [];
for (var i = 2; i < 10000; i++) {
  var s = d(i);
  if (d(s) === i && i != s) {
    amicable.push(s, i);
  }
}

// unique
amicable.sort();
var uniqued = [];
var last;
for (var i = 0; i < amicable.length; i++) {
  if (amicable[i] !== last) uniqued.push(amicable[i]);
  last = amicable[i];
}
var total = uniqued.reduce(sum, 0);
console.log(total);
