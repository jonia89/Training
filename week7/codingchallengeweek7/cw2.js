function squareDigits(num) {
  return Number(
    num
      .toString()
      .split('')
      .map(value => value * value).join(''));
}
console.log(squareDigits(666));
