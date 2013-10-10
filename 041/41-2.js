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

function generatePermutations(list) {
    var permutations = [];
    function addNext(current) {
        if (current.length === list.length) {
            permutations.push(current);
            return;
        }
        list.forEach(function (item) {
            if (current.indexOf(item) === -1) {
                addNext(current.concat(item));
            }
        });
    }
    addNext([]);
    return permutations;
}

var all = [];
var list = [];
var max = 0;
for (var i = 1; i <= 9; i++) {
  list.push(i);
  var permutations = generatePermutations(list);
  permutations.forEach(function (p) {
    var n = Number(p.join(''));
    if (isPrime(n)) {
      max = Math.max(max, n);
    }
  });
}
console.log(max);
