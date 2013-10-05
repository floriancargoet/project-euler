/*
The fraction 49/98 is a curious fraction, as an inexperienced mathematician in attempting to simplify it may incorrectly believe that 49/98 = 4/8, which is correct, is obtained by cancelling the 9s.

We shall consider fractions like, 30/50 = 3/5, to be trivial examples.

There are exactly four non-trivial examples of this type of fraction, less than one in value, and containing two digits in the numerator and denominator.

If the product of these four fractions is given in its lowest common terms, find the value of the denominator.


*/


function haveCommon(i, j) {
    i = String(i);
    j = String(j);
    return j.indexOf(i.charAt(0)) !== -1 || j.indexOf(i.charAt(1)) !== -1;
}

function simplifyCommon(i, j) {
    i = String(i);
    j = String(j);
    var jIndex = j.indexOf(i.charAt(0));
    if (jIndex !== -1) {
        // remove i[0] and j[jIndex]
        i = i.charAt(1);
        j = j.charAt(jIndex ? 0 : 1);
    } else {
        // remove i[1]
        jIndex = j.indexOf(i.charAt(1));
        i = i.charAt(0);
        j = j.charAt(jIndex ? 0 : 1);
    }
    //console.log(i, j);
    return Number(i) / Number(j);
}

for (var i = 10; i < 100; i++)
for (var j = i+1; j < 100; j++) {
    if (
        haveCommon(i, j) &&
        i%10 && j%10 &&  // non obvious pairs
        simplifyCommon(i, j) === i/j
    ) {
        console.log(i, '/', j);
    }
}


console.log(1/4*1/5*2/5*4/8); //=> 1/100