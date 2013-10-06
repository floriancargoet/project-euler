/*
It was proposed by Christian Goldbach that every odd composite number can be written as the sum of a prime and twice a square.

9 = 7 + 2×1^2
15 = 7 + 2×2^2
21 = 3 + 2×3^2
25 = 7 + 2×3^2
27 = 19 + 2×2^2
33 = 31 + 2×1^2

It turns out that the conjecture was false.

What is the smallest odd composite that cannot be written as the sum of a prime and twice a square?
*/

function isPrime(n) {
    if (n%1 || n<2) return false;
    var m=Math.sqrt(n);
    for (var i=2;i<=m;i++) if (n%i==0) return false;
    return true;
}

var primes = [2];
var i = 1;
while (true) {
    i += 2;
    if (isPrime(i)) {
        primes.push(i);
    } else {
        //console.log('checking i', i);
        var found = findSum(i);
        //console.log(found);
        if (!found) {
            console.log(i);
            break;
        }
    }
}

function findSum(n) {
    // take the primes below n and add squares
    var l = primes.length;
    while (l--) {
        var p = primes[l];
        var sum = 0;
        var i = 0;
        while (sum < n) {
            i++;
            sum = p + 2*i*i;
            //console.log(p, i);
        }
        if (sum === n) {
            return true; // found sum
        }
    }
    return false; // cannot find a sum
}