/*
The following iterative sequence is defined for the set of positive integers:

n → n/2 (n is even)
n → 3n + 1 (n is odd)

Using the rule above and starting with 13, we generate the following sequence:

13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.

Which starting number, under one million, produces the longest chain?

NOTE: Once the chain starts the terms are allowed to go above one million.
*/


var cache = [];
var f = function(n) {
  return (n % 2) ? (3 * n + 1) : (n/2);
};

var maxL = 0;
var maxI;

for (var i = 13; i < 1000000; i++) {
  var r = i;
  var l = 0;
  while (r != 1) {
    //console.log(r);
    r = f(r);
    l++;
    if (cache[r]) {
      l += cache[r];
      break;
    }
  }
  //console.log('caching ', i);
  cache[i] = l;
  //console.log(i, l);
  if (maxL < l) {
    maxL = l;
    maxI = i;
  }
}
console.log(maxI, maxL);

