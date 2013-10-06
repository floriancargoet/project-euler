/*
The rules for writing Roman numerals allow for many ways of writing each number (see About Roman Numerals...). However, there is always a "best" way of writing a particular number.

For example, the following represent all of the legitimate ways of writing the number sixteen:

IIIIIIIIIIIIIIII
VIIIIIIIIIII
VVIIIIII
XIIIIII
VVVI
XVI

The last example being considered the most efficient, as it uses the least number of numerals.

The 11K text file, roman.txt (right click and 'Save Link/Target As...'), contains one thousand numbers written in valid, but not necessarily minimal, Roman numerals; that is, they are arranged in descending units and obey the subtractive pair rule (see About Roman Numerals... for the definitive rules for this problem).

Find the number of characters saved by writing each of these in their minimal form.

Note: You can assume that all the Roman numerals in the file contain no more than four consecutive identical units.
*/

var ones = [
    ['M', 1000],
    ['C', 100],
    ['X', 10],
    ['I', 1]
];

var fives = ['D', 'L', 'V'];

var roman = function (arabic){
    var r = '';
    ones.forEach(function(pair, i){
        var sym = pair[0], val = pair[1];
        var rest = arabic % val;
        var count = (arabic - rest) / val;

        if(count < 4 || sym === 'M'){
            r += Array(count + 1).join(sym);
        } else if(count == 4){
            r += sym + fives[i - 1];
        } else if (count == 9){
            r += sym + ones[i - 1][0];
        } else {
            r += fives[i-1] + Array(count - 4).join(sym);
        }
        arabic = rest;
    });
    return r;
};


var values = {
    'I' : 1,
    'V' : 5,
    'X' : 10,
    'L' : 50,
    'C' : 100,
    'D' : 500,
    'M' : 1000
};
function arabic(r) {
    var a = 0;
    for (var i = 0; i < r.length; i++) {
        var current = values[r.charAt(i)];
        var next = values[r.charAt(i+1)] || 0;
        if (current >= next) {
            a += current;
        } else { // negative
            a += (next - current);
            i++;
        }
    }
    return a;
}


function sizeOf(arr) {
    return arr.reduce(function (acc, s) {
        return acc + s.length;
    }, 0);
}


var numbers = require('fs').readFileSync('./roman.txt', 'utf8').split('\n');
var before = sizeOf(numbers);
numbers = numbers.map(arabic).map(roman);
var after = sizeOf(numbers);
console.log(before - after);