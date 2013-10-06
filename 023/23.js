/*
A perfect number is a number for which the sum of its proper divisors is exactly equal to the number. For example, the sum of the proper divisors of 28 would be 1 + 2 + 4 + 7 + 14 = 28, which means that 28 is a perfect number.

A number n is called deficient if the sum of its proper divisors is less than n and it is called abundant if this sum exceeds n.

As 12 is the smallest abundant number, 1 + 2 + 3 + 4 + 6 = 16, the smallest number that can be written as the sum of two abundant numbers is 24. By mathematical analysis, it can be shown that all integers greater than 28123 can be written as the sum of two abundant numbers. However, this upper limit cannot be reduced any further by analysis even though it is known that the greatest number that cannot be expressed as the sum of two abundant numbers is less than this limit.

Find the sum of all the positive integers which cannot be written as the sum of two abundant numbers.
*/

var max = 28123;

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

function sum(a, b) {
  return a + b;
}

function d(n) {
  return div(n).reduce(sum, 0);
}

function isAbundant(n) {
  return d(n) > n;
}

var abundants = [];
for (var i = 12; i < max; i++) {
  if (isAbundant(i)) abundants.push(i);
}

asSum = [];
for (var i = 0; i < abundants.length; i++) {
  for (var j = 0; j < abundants.length; j++) {
    var a = abundants[i];
    var b = abundants[j];
    if (a + b > max) break;
    asSum[a + b] = true;
  }
}

var notAsSum = [];
for (var i = 1; i < max; i++) {
  if (!asSum[i]) {
    notAsSum.push(i);
  }
}

var total = notAsSum.reduce(sum, 0);
console.log(total);
