/*
The number 3797 has an interesting property. Being prime itself, it is possible to continuously remove digits from left to right, and remain prime at each stage: 3797, 797, 97, and 7. Similarly we can work from right to left: 3797, 379, 37, and 3.

Find the sum of the only eleven primes that are both truncatable from left to right and right to left.

NOTE: 2, 3, 5, and 7 are not considered to be truncatable primes.
*/

function isPrime(n) {
    if (n%1 || n<2) return false;
    var m=Math.sqrt(n);
    for (var i=2;i<=m;i++) if (n%i==0) return false;
    return true;
}

function truncateLeftPrime(n) {
  while(n > 10) {
    n = Number(String(n).slice(1)); // left truncate
    if (!isPrime(n)) return false;
  }
  return true;
}

function truncateRightPrime(n) {
  while(n > 10) {
    n = Math.floor(n/10); // right truncate
    if (!isPrime(n)) return false;
  }
  return true;
}

var count = 0;

var i = 11;
var sum = 0;
while (count < 11) {
  if (isPrime(i) && truncateLeftPrime(i) && truncateRightPrime(i)) {
    count++;
    sum += i;
  }
  i++;
}

console.log(sum)
