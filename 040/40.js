/*
An irrational decimal fraction is created by concatenating the positive integers:

0.123456789101112131415161718192021...

It can be seen that the 12th digit of the fractional part is 1.

If dn represents the nth digit of the fractional part, find the value of the following expression.

d1 × d10 × d100 × d1000 × d10000 × d100000 × d1000000
*/


var str = '';

var i = 1;
while (str.length < 1000000) {
  str += i++;
}

var product = Number(str[0]) * Number(str[9]) * Number(str[99]) * Number(str[999])* Number(str[9999]) * Number(str[99999]) * Number(str[999999]);
console.log(product);
