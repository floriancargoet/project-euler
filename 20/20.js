/*
n! means n × (n − 1) × ... × 3 × 2 × 1

For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.

Find the sum of the digits in the number 100!
*/
var number = [1];

function multiply(bigNum, n) {
  var result = [];
  var i = bigNum.length;
  var carry = 0;
  while (i--) {
    var p = bigNum[i] * n;
    p += carry;
    if (p >= 10) {
      carry = Math.floor(p/10);
      p -= carry * 10;
    } else {
      carry = 0;
    }
    result.push(p);
  }
  // extra carry
  while (carry >= 10) {
    var c = Math.floor(carry/10); // next carry
    result.push(carry-10*c);
    carry = c;
  }
  if (carry) {
    result.push(carry);
  }
  result.reverse();
  return result;
}


for (var i = 1; i <= 100; i++) {
  number = multiply(number, i);
}

var sum = number.reduce(function (a, b) {
return a + b;
}, 0);

console.log(sum);
