"use strict";

const { listen } = require("express/lib/application");

let min;
let max;
let numbers = [];
const processed = process.argv.forEach(function (val) {
  console.log(" " + val);
  min = Math.min(numbers[2], val);
  max = Math.max(numbers[2], val);
  numbers.push(Number(val));
});
console.log(`Min ${min}`);
console.log(`Max ${max}`);

numbers = numbers.slice(2);

const mean = eval(numbers.join("+")) / numbers.length;
console.log(`Mean ${mean}`);

const median = function (numbers) {
  const sorted = Array.from(numbers).sort((a, b) => a - b);
  const middle = Math.floor(sorted.length / 2);
  if (sorted.length % 2 === 0) {
    return (sorted[middle - 1] + sorted[middle]) / 2;
  }
  return sorted[middle];
};
console.log(`Median ${median(numbers)}`);

const mode = (a) =>
  Object.values(
    a.reduce((count, e) => {
      if (!(e in count)) {
        count[e] = [0, e];
      }
      count[e][0]++;
      return count;
    }, {})
  ).reduce((a, v) => (v[0] < a[0] ? a : v), [0, null])[1];
console.log(`Mode ${mode(numbers)}`);
