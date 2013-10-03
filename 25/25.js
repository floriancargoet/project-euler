/*
The Fibonacci sequence is defined by the recurrence relation:

Fn = Fn−1 + Fn−2, where F1 = 1 and F2 = 1.
Hence the first 12 terms will be:

F1 = 1
F2 = 1
F3 = 2
F4 = 3
F5 = 5
F6 = 8
F7 = 13
F8 = 21
F9 = 34
F10 = 55
F11 = 89
F12 = 144
The 12th term, F12, is the first term to contain three digits.

What is the first term in the Fibonacci sequence to contain 1000 digits?
*/

var bigA = [1];
var bigB = [1];

function add(a, b) {
    var result = [];
    while (a.length < b.length) {
        a.unshift(0);
    }
    while (b.length < a.length) {
        b.unshift(0);
    }
    var l = a.length;
    var carry = 0;
    while (l--) {
        var sum = a[l] + b[l] + carry;
        carry = 0;
        if (sum >= 10) {
            carry = 1;
            sum -= 10;
        }
        result[l] = sum;
    }
    if (carry) {
        result.unshift(carry);
    }
    return result;
}

var n = 2;
while (bigB.length < 1000) {
    var bigC = add(bigA, bigB);
    bigA = bigB;
    bigB = bigC;
    n++;
}

console.log(n);