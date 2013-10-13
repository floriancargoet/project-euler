/*
The number, 1406357289, is a 0 to 9 pandigital number because it is made up of each of the digits 0 to 9 in some order, but it also has a rather interesting sub-string divisibility property.

Let d1 be the 1st digit, d2 be the 2nd digit, and so on. In this way, we note the following:

d2d3d4=406 is divisible by 2
d3d4d5=063 is divisible by 3
d4d5d6=635 is divisible by 5
d5d6d7=357 is divisible by 7
d6d7d8=572 is divisible by 11
d7d8d9=728 is divisible by 13
d8d9d10=289 is divisible by 17
Find the sum of all 0 to 9 pandigital numbers with this property.
*/

var divisors = [2, 3, 5, 7, 11, 13, 17];
function invalid(array) {
    if (array.length < 4) return false;
    // take last 3 digits
    var n = Number(array.slice(-3).join(''));
    return n % divisors[array.length - 4];
}

function generatePermutations(list) {
    var permutations = [];
    function addNext(current) {
        if (invalid(current)) {
            // abort
            return;
        }
        if (current.length === list.length) {
            permutations.push(Number(current.join('')));
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

var matchProperty = generatePermutations('0123456789'.split(''));
var sum = matchProperty.reduce(function (a, b) {
    return a + b;
});
console.log(sum);