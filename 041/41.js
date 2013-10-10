/*
We shall say that an n-digit number is pandigital if it makes use of all the digits 1 to n exactly once. For example, 2143 is a 4-digit pandigital and is also prime.

What is the largest n-digit pandigital prime that exists?
*/

function isPrime(n) {
    if (n%1 || n<2) return false;
    var m=Math.sqrt(n);
    for (var i=2;i<=m;i++) if (n%i==0) return false;
    return true;
}

function isPandigital(n) {
  var s = String(n);
  for (var i = 1; i <= s.length; i++) {
      if (s.indexOf(String(i)) === -1) return false;
  }
  return true;
}


for (var i = 987654321; i > 0; i-=2) {
  if (isPandigital(i) && isPrime(i)) {
      console.log(i);
      break;
  }
}
