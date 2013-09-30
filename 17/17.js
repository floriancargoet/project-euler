/*
If the numbers 1 to 5 are written out in words: one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.

If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words, how many letters would be used?


NOTE: Do not count spaces or hyphens. For example, 342 (three hundred and forty-two) contains 23 letters and 115 (one hundred and fifteen) contains 20 letters. The use of "and" when writing out numbers is in compliance with British usage.
*/

var first = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
var tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

var words = ['one', 'thousand'];

function toWords(n) {
    var words = [];
    var hasHundreds = false;
    if (n >= 100) {
        hasHundreds = true;
        var h = Math.floor(n/100);
        words.push(first[h]);
        words.push('hundred');
        n -= 100*h;
    }
    if (n && hasHundreds) {
        words.push('and');
    }
    if (n >= 20) {
        var t = Math.floor(n/10);
        words.push(tens[t]);
        n -= 10*t;
    }
    words.push(first[n]);
    return words;
}

for (var i = 1; i < 1000; i++) {
    var iWords = toWords(i);
    words.push.apply(words, iWords);
}

var nbLetters = words.reduce(function (total, word) {
    return total + word.length;
}, 0);

console.log(nbLetters);