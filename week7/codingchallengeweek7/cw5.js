var min = function (list) {
  list.sort(function (a, b) {
    return a - b;
  });
  return list[0];
};

var max = function (list) {
  list.sort(function (a, b) {
    return b - a;
  });
  return list[0];
};
console.log(min([4,6,2,1,9,63,-134,566]))
console.log(max([4,6,2,1,9,63,-134,566]))