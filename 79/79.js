/*
A common security method used for online banking is to ask the user for three random characters from a passcode. For example, if the passcode was 531278, they may ask for the 2nd, 3rd, and 5th characters; the expected reply would be: 317.

The text file, keylog.txt, contains fifty successful login attempts.

Given that the three characters are always asked for in order, analyse the file so as to determine the shortest possible secret passcode of unknown length.
*/

var codes = require('fs').readFileSync('./keylog.txt', 'utf8').split('\n');
codes.sort();

var letters = {};
Array.prototype.forEach.call(codes.join(''), function (letter) {
    letters[letter] = [];
});
console.log(letters)
// no 4 or 5

codes.forEach(function (code) {
    letters[Number(code.charAt(0))][0] = true;
    letters[Number(code.charAt(1))][1] = true;
    letters[Number(code.charAt(2))][2] = true;
})

console.log(letters);

// 7 is always in first place

function works(secret) {
    for (var i = 0; i < codes.length; i++) {
        var code = codes[i];
        var index = secret.indexOf(code.charAt(0));
        if (index === -1) return false;
        index = secret.indexOf(code.charAt(1), index);
        if (index === -1) return false;
        index = secret.indexOf(code.charAt(2), index);
        if (index === -1) return false;
    }
    return true;
}

// concat all codes, this is a valid secret (but big)
var secret = codes.join('');

// while the secret is valid, remove one character
var i = 0;
while (true) {
    var shorter = secret.slice(0,i) + secret.slice(i+1);
    if(works(shorter)) {
        console.log(shorter);
        secret = shorter;
    } else {
        i++;
    }
    if (i === shorter.length) break;
}
// 73162890
// no digits are here twice so that's the shortest