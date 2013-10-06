/*
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
*/

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

var max = 20;
var factorsOccurences = [];

for (var i = 2; i <= max; i++) {
  var f = factorize(i);
  var occ = [];
  f.forEach(function (factor){
    occ[factor] = occ[factor] || 0;
    occ[factor]++;
  });
  occ.forEach(function(o, i){
    if (o) {
      factorsOccurences[i] = Math.max(factorsOccurences[i] || 0, o);
    }
  });
}
var smallest = 1;
factorsOccurences.forEach(function (occ, n){
  if (occ) {
    smallest *= Math.pow(n, occ);
  }
});

console.log(smallest);
