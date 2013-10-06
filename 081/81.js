/*
In the 5 by 5 matrix below, the minimal path sum from the top left to the bottom right, by only moving to the right and down, is indicated in bold red and is equal to 2427.


131 673 234 103 18
201 96  342 965 150
630 803 746 422 111
537 699 497 121 956
805 732 524 37  331

Find the minimal path sum, in matrix.txt (right click and 'Save Link/Target As...'), a 31K text file containing a 80 by 80 matrix, from the top left to the bottom right by only moving right and down.
*/

// that problem 18 with minimum path instead of maximum, and a matrix instead of a triangle
/*
var lines = [
'131 673 234 103 18',
'201 96  342 965 150',
'630 803 746 422 111',
'537 699 497 121 956',
'805 732 524 37  331'
];
*/

var lines = require('fs').readFileSync('./matrix.txt', 'utf8').split('\n');

// parse string
var nodeLines = lines.map(function(line) {
    return line.split(',').map(Number);
});

// convert to triangle
var lines18 = [];
for (var i = 0; i < nodeLines.length; i++)
for (var j = 0; j < nodeLines.length; j++) {
    lines18[i+j] = lines18[i+j] || [];
    lines18[i+j].push(nodeLines[j][i]);
}

// add the Infinity

for (var i = 0; i < lines18.length; i++) {
    while (lines18[i].length < i+1) {
        lines18[i].push(Infinity);
        lines18[i].unshift(Infinity);
    }
}

nodeLines = lines18;


var i = nodeLines.length;
while(i--) {
    for (var j = 0; j < nodeLines[i].length - 1; j++) {
        if (i > 0) {
            nodeLines[i-1][j] += Math.min(nodeLines[i][j], nodeLines[i][j+1])
        }
    }
}

console.log(nodeLines[0][0]);
