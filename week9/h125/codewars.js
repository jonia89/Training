function isOdd(n) {
  return n % 2 !== 0;
}
function sortArray(array) {
  const odds = array.filter(isOdd).sort((a, b) => a - b);
  const slots = array.map((n) => (isOdd(n) ? null : n));
  let i = 0;
  while (i < slots.length) {
    if (slots[i] === null) {
      slots[i] = odds.shift();
    }
    i++;
  }
  return slots;
}
sortArray([5, 6, 7, 4, 3]);
