/*
2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.

What is the sum of the digits of the number 2^1000?

*/

var number = [1];

function multiplyByTwo(bigNum) {
  var result = [];
  var i = bigNum.length;
  var carry = 0;
  while (i--) {
    var p = bigNum[i] * 2;
    p += carry;
    if (p >= 10) { // cannot be 20 when only multiplying by 2
      carry = 1;
      p -= 10;
    } else {
      carry = 0;
    }
    result.push(p);
  }
  if (carry) {
    result.push(carry);
  }
  result.reverse();
  return result;
}

for (var i = 1; i <= 1000; i++) {
  number = multiplyByTwo(number);
  var sum = number.reduce(function (a, b) {
    return a + b;
  }, 0);
  if (i === 1000) {
    console.log(sum);
  }
}

