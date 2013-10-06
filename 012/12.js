/*
The sequence of triangle numbers is generated by adding the natural numbers. So the 7th triangle number would be 1 + 2 + 3 + 4 + 5 + 6 + 7 = 28. The first ten terms would be:

1, 3, 6, 10, 15, 21, 28, 36, 45, 55, ...

Let us list the factors of the first seven triangle numbers:

 1: 1
 3: 1,3
 6: 1,2,3,6
10: 1,2,5,10
15: 1,3,5,15
21: 1,3,7,21
28: 1,2,4,7,14,28
We can see that 28 is the first triangle number to have over five divisors.

What is the value of the first triangle number to have over five hundred divisors?
*/

/*
triangle numbers are of the form n(n+1)/2
n & n+1 are coprime integers
*/


function combine(arr) {
  if (arr.length === 1) {
    return [1, arr[0]];
  }
  var first = arr.pop();
  var acc = [];
  var all = combine(arr);
  for (var i =0; i < all.length; i++) {
    acc.push(all[i], all[i] * first);
  }
  return acc;
}


var factorize = function (n) {
  var factors = [];
  for (var i = 2; i <= n; i++) {
    while (n % i === 0) {
      factors.push(i);
      n /= i;
    }
  }
  return factors;
};

var unique = function (arr) {
  var ret = [];
  var last;
  arr.sort(function (a, b) {return a-b;});
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] !== last) {
      last = arr[i];
      ret.push(last);
    }
  }
  return ret;
};



var l = 0;
var n = 10;
while (l <= 500) {
  var triangle = n * (n+1) / 2;
  var u = unique(combine(factorize(triangle)).slice(1, -1));
  l = u.length;
  n++;
}
console.log(triangle, l);
