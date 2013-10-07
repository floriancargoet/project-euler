/*
The decimal number, 585 = 1001001001_2 (binary), is palindromic in both bases.

Find the sum of all numbers, less than one million, which are palindromic in base 10 and base 2.

(Please note that the palindromic number, in either base, may not include leading zeros.)
*/


function isPalindrome(s) {
  for (var i = 0; i <= s.length/2; i++) {
    if (s.charAt(i) !== s.charAt(s.length - i - 1)) {
      return false;
    }
  }
  return true;
}


var sum = 0;
for (var i = 1; i < 1000000; i++) {
  if (isPalindrome(String(i)) && isPalindrome(i.toString(2))) {
    sum += i;
  }
}

console.log(sum);
