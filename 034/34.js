/*
145 is a curious number, as 1! + 4! + 5! = 1 + 24 + 120 = 145.

Find the sum of all numbers which are equal to the sum of the factorial of their digits.

Note: as 1! = 1 and 2! = 2 are not sums they are not included.
*/

function fact(n) {
    if (n < 2) return 1;
    return n * fact(n-1);
}

function digits(n) {
  return String(n).split('').map(Number);
}

function sum (a, b) {
    return a + b;
}
var max = fact(9) * 3;

var all = [];
for (var i = 3; i <= max; i++) {
    if (i === digits(i).map(fact).reduce(sum, 0)) {
        all.push(i)
    }
}
console.log(all.reduce(sum, 0))