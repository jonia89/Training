function multiply(a, b) {
  return a * b;
}

function addition(a, b) {
  return a + b;
}

function subtraction(a, b) {
  return a - b;
}

function division(a, b) {
  return a / b;
}
function square(a) {
  return Math.sqrt(a);
}
function power(a, b) {
  return Math.pow(a, b);
}
function isANumber(a) {
  return typeof a === typeof 0 && a != NaN ? true : false;
}
function pythagoras(a, b) {
  return square(power(a, 2) + power(b, 2));
}

module.exports = {
  multiply,
  addition,
  subtraction,
  division,
  square,
  power,
  isANumber,
  pythagoras,
};
