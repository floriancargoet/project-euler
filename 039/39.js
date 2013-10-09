/*
If p is the perimeter of a right angle triangle with integral length sides, {a,b,c}, there are exactly three solutions for p = 120.

{20,48,52}, {24,45,51}, {30,40,50}

For which value of p ≤ 1000, is the number of solutions maximised?
*/

// a*a + b*b = c*c
// a + b < p/2

var results = [];
var max = 0, maxP;
for (var p = 3; p <= 1000; p++) {
  var count = 0;
  for (var a = 1; a < p/2; a++) {
    for (var b = a; b < p/2; b++) {
      var c = Math.sqrt(a*a + b*b);
      if (c === Math.floor(c) && a + b + c === p) {
        count++;
      }
    }
  }
  if (count > max) {
    max = count;
    maxP = p;
  }
}


console.log(maxP);
