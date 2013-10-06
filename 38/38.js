/*
Take the number 192 and multiply it by each of 1, 2, and 3:

192 × 1 = 192
192 × 2 = 384
192 × 3 = 576
By concatenating each product we get the 1 to 9 pandigital, 192384576. We will call 192384576 the concatenated product of 192 and (1,2,3)

The same can be achieved by starting with 9 and multiplying by 1, 2, 3, 4, and 5, giving the pandigital, 918273645, which is the concatenated product of 9 and (1,2,3,4,5).

What is the largest 1 to 9 pandigital 9-digit number that can be formed as the concatenated product of an integer with (1,2, ... , n) where n > 1?
*/

// the largest is >= 918273645 so the base integer starts with a 9
/*
 for all integers starting with a 9
     compute i * (1, ..., n)
       check pandigital && check max
       if result >= 1000000000 break;

*/


function concatProductUntil9(i) {
    var result = '';
    var n = 1;
    while (result.length < 9) {
        result += i * n;
        n++;
    }
    return result;
}
function pandigital(s) {
    for (var i = 1; i < 10; i++) {
        if (s.indexOf(String(i)) === -1) return false;
    }
    return s.length === 9;
}


var max = 0;
// since n must be > 1, the result is at least concat(i, 2*i), of length 2*length(i)
// a max for the loop is 99999
for (var i = 1; i < 99999; i++) {
    // add a 9 before
    var n = Number('9' + i);
    var c = concatProductUntil9(n);
    if (pandigital(c)) {
        console.log(c)
        max = Math.max(max, Number(c));
    }
}

console.log(max)