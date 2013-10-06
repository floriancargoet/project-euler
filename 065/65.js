function big(n) {
    return String(n).split('').map(Number);
}

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

function multiply(bigNum, n) {
  var result = [];
  var i = bigNum.length;
  var carry = 0;
  while (i--) {
    var p = bigNum[i] * n;
    p += carry;
    if (p >= 10) {
      carry = Math.floor(p/10);
      p -= carry * 10;
    } else {
      carry = 0;
    }
    result.push(p);
  }
  // extra carry
  while (carry >= 10) {
    var c = Math.floor(carry/10); // next carry
    result.push(carry-10*c);
    carry = c;
  }
  if (carry) {
    result.push(carry);
  }
  result.reverse();
  return result;
}

function Frac(n, d) {
    this.n = big(n);
    this.d = big(d);
}

Frac.prototype.add = function (n) {
    console.log(n)
    this.n = add(this.n, multiply(this.d, n));
    //this.n += n * this.d;
}
Frac.prototype.invert = function () {
    var tmp = this.n;
    this.n = this.d;
    this.d = tmp;
}



var order = 100;
var k = Math.floor(order/3);
var f = new Frac(1, 1);
if (order%3 === 0) {
    f = new Frac(2*k, 1);
    console.log(2*k);
    k--;
} else {
    console.log(1)
}
order--;

while (order > 1) {
    f.invert();
    if (order % 3 === 0) {
        f.add(2*k--);
    } else {
        f.add(1);
    }
    order--;
}
f.invert();
f.add(2);

var sum = f.n.reduce(function (a, b) {
    return a + b;
}, 0);

console.log(sum);