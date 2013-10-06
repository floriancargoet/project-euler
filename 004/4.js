/*
A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 99.

Find the largest palindrome made from the product of two 3-digit numbers.
*/

var isPalindrome = function (n) {
  var s = String(n);
  for (var i = 0; i < s.length/2; i++) {
    //console.log(s, s[i], s[s.length - i - 1]);
    if (s[i] !== s[s.length - i - 1]) {
      return false;
    }
  }
  return true;
};

var max = 0;
for (var i = 100; i < 1000; i++) {
  for (var j = i; j < 1000; j++) {
    var p = i*j;
    if (isPalindrome(p)) {
      max = Math.max(max, p);
    }
  }
}
console.log(max);
