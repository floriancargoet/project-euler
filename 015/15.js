/*
Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.


How many such routes are there through a 20×20 grid?
*/

var cache = [];

var nbPaths = function(w, h) {
  cache[w] = cache[w] || [];
  if (cache[w][h]) {
    return cache[w][h];
  }
  if (w === 0 || h === 0) {
    return 1;
  }
  var res = nbPaths(w-1, h) + nbPaths(w, h-1);
  cache[w][h] = res;
  cache[h][w] = res;
  return res;
};

console.log(
  nbPaths(20, 20)
);
