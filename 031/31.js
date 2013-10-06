/*
In England the currency is made up of pound, £, and pence, p, and there are eight coins in general circulation:

1p, 2p, 5p, 10p, 20p, 50p, £1 (100p) and £2 (200p).
It is possible to make £2 in the following way:

1×£1 + 1×50p + 2×20p + 1×5p + 1×2p + 3×1p
How many different ways can £2 be made using any number of coins?
*/

var values = [200, 100, 50, 20, 10, 5, 2, 1];

var solutions = [];
function fill(max, list, solution) {
  if (list.length === 1) { // shortcut at the end
    solution.push(max);
    solutions.push(solution);
    return;
  }
  if (max === 0) {
    solutions.push(solution);
    return;
  }
  var n = list[0];
  // fill with 0 item of value n, then 1, then 2…
  var nn = 0;
  // with 0
  fill(max, list.slice(1), solution.concat(nn));
  while (n <= max) {
    max = max - n;
    nn++;
    fill(max, list.slice(1), solution.concat(nn));
  }
}

fill(200, values, []);

function valueOf(s) {
  return s.reduce(function (a, b, i) {
    return a + b*values[i];
  }, 0);
}
console.log(solutions.length);
//console.log(solutions);

