/*
The number, 197, is called a circular prime because all rotations of the digits: 197, 971, and 719, are themselves prime.

There are thirteen such primes below 100: 2, 3, 5, 7, 11, 13, 17, 31, 37, 71, 73, 79, and 97.

How many circular primes are there below one million?
*/

function isPrime(n) {
    if (n%1 || n<2) return false;
    var m=Math.sqrt(n);
    for (var i=2;i<=m;i++) if (n%i==0) return false;
    return true;
}

function rotate(n) {
    n = String(n);
    return Number(n.charAt(n.length - 1) + n.slice(0, n.length - 1));
}


var nbCirculars = 1;
for (var i = 3; i < 1000000; i+=2) {
    if (isPrime(i)) {
        var j = i, circular;
        do {
            j = rotate(j);
            circular = isPrime(j);
        } while (j != i && circular);

        if (circular) {
            nbCirculars++;
        }
    }
}

console.log(nbCirculars);