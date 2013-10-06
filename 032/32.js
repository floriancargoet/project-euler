/*
We shall say that an n-digit number is pandigital if it makes use of all the digits 1 to n exactly once; for example, the 5-digit number, 15234, is 1 through 5 pandigital.

The product 7254 is unusual, as the identity, 39 × 186 = 7254, containing multiplicand, multiplier, and product is 1 through 9 pandigital.

Find the sum of all products whose multiplicand/multiplier/product identity can be written as a 1 through 9 pandigital.

HINT: Some products can be obtained in more than one way so be sure to only include it once in your sum.
*/

/*
given two numbers of length n and m, the product has a length of n+m-1 or n+m

the multiplicand, multiplier, and product use 9 digits
so len(multiplicand) + len(multiplier) + len(product) = 9
or m + n + p = 9
with p <= n + m : p + p <= 9
thus p <= 4
and m + n <=5
*/

function repeats(n) {
    n = String(n);
    for (var l = 0; l < n.length; l++) {
        if (n.indexOf(n.charAt(l)) != l) return true;
    }
    return false;
}

function check(i, j) {
    var s = String(i) + String(j) + String(i*j);
    return s.length === 9 && s.indexOf('0') === -1 && ! repeats(s);
}

var all = [];
for (var i = 1; i <= 99999; i++) {
    if (repeats(i)) continue;
    for (var j = 1; j <= 99999; j++) {
        if (i*j > 9999) break;
        if (repeats(j)) continue;
        if (check(i, j)) {
            all.push(i*j);
        }
    }
}
all.sort();
var unique = [];
var last;
for(var i = 0; i < all.length; i++) {
    if (all[i] != last) {
        unique.push(last = all[i]);
    }
}

var sum = unique.reduce(function (a, b) {
    return a + b;
}, 0);

console.log(sum);