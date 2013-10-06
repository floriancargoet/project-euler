/*
 By starting at the top of the triangle below and moving to adjacent numbers on the row below, the maximum total from top to bottom is 23.

   3_
  7_ 4
 2 4_ 6
8 5 9_ 3

That is, 3 + 7 + 4 + 9 = 23.

Find the maximum total from top to bottom of the triangle below:

75
95 64
17 47 82
18 35 87 10
20 04 82 47 65
19 01 23 75 03 34
88 02 77 73 07 63 67
99 65 04 28 06 16 70 92
41 41 26 56 83 40 80 70 33
41 48 72 33 47 32 37 16 94 29
53 71 44 65 25 43 91 52 97 51 14
70 11 33 28 77 73 17 78 39 68 17 57
91 71 52 38 17 14 91 43 58 50 27 29 48
63 66 04 68 89 53 67 30 73 16 69 87 40 31
04 62 98 27 23 09 70 98 73 93 38 53 60 04 23

NOTE: As there are only 16384 routes, it is possible to solve this problem by trying every route. However, Problem 67, is the same challenge with a triangle containing one-hundred rows; it cannot be solved by brute force, and requires a clever method! ;o)
*/

var Node = function (value) {
    this.value = value;
    this.children = [];
    this.parents = [];
};
Node.prototype.add = function() {
    var cn = this.children;
    cn.push.apply(cn, arguments);
    var self = this;
    cn.forEach(function(c) {
        if (c.parents.indexOf(self) == -1)
            c.parents.push(self);
    });
};

Node.prototype.maximize = function () {
    if (this.maxed) return;
    this.maxed = true;
    var cn = this.children;
    var max = (cn[0].total || cn[0].value) > (cn[1].total || cn[1].value) ? cn[0] : cn[1];
    this.total = this.value + (max.total || max.value);
    this.max = max; // mark for debugging purposes
};

var lines = [
'75',
'95 64',
'17 47 82',
'18 35 87 10',
'20 04 82 47 65',
'19 01 23 75 03 34',
'88 02 77 73 07 63 67',
'99 65 04 28 06 16 70 92',
'41 41 26 56 83 40 80 70 33',
'41 48 72 33 47 32 37 16 94 29',
'53 71 44 65 25 43 91 52 97 51 14',
'70 11 33 28 77 73 17 78 39 68 17 57',
'91 71 52 38 17 14 91 43 58 50 27 29 48',
'63 66 04 68 89 53 67 30 73 16 69 87 40 31',
'04 62 98 27 23 09 70 98 73 93 38 53 60 04 23'
];

// parse string
var nodeLines = lines.map(function(line) {
    return line.split(' ').map(Number).map(function (n) {
        return new Node(n);
    });
});

// link nodes
for(var i = 0; i < nodeLines.length; i++) {
    var nodes = nodeLines[i];
    for(var j = 0; j < nodes.length; j++) {
        var node = nodes[j];
        if (nodeLines[i+1]) {
            node.add(nodeLines[i+1][j], nodeLines[i+1][j+1]);
        }
    }
}

// get first node
var a = nodeLines[0][0];

var cascade = function (node, fn) {
    fn(node);
    if (node.children.length) {
        node.children.forEach(function (child) {
            cascade(child, fn);
        });
    }
}

// reduce the graph to only one node, layer by layer
while (!a.isLeaf) {
    var leaves = [];
    cascade(a, function(node) {
        if (!node.children.length || node.isLeaf) {//leaf
            leaves.push(node);
        }
    });
    leaves.forEach(function (leaf) {
        leaf.parents.forEach(function (p) {
            p.maximize();
            p.isLeaf = true;
        });
    })
}

console.log(a.total);

console.log('path:');
var node = a;
while (node) {
    console.log(node.value);
    node = node.max;
}
