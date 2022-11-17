const {
  multiply,
  addition,
  division,
  square,
  power,
  isANumber,
  pythagoras,
} = require("./joni-calculator");

describe("joni-calculator", () => {
  it("multiply works correctly", () => {
    expect(multiply(-5, 2)).toEqual(-10);
    expect(multiply(10, 4)).toEqual(40);
    expect(multiply(20, 8)).toEqual(160);
    expect(multiply(2, 16)).toEqual(32);
    expect(multiply(4, 32)).toEqual(128);
  });

  it("addition works correctly", () => {
    expect(addition(1, 2)).toEqual(3);
    expect(addition(-1, 4)).toEqual(3);
    expect(addition(1, 8)).toEqual(9);
    expect(addition(9, 16)).toEqual(25);
    expect(addition(25, 32)).toEqual(57);
  });

  it("division works correctly", () => {
    expect(division(10, 2)).toEqual(5);
    expect(division(10, 1)).toEqual(10);
    expect(division(10, 5)).toEqual(2);
    expect(division(10, 10)).toEqual(1);
    expect(division(10, 20)).toEqual(0.5);
  });

  it("square root works correctly", () => {
    expect(square(25)).toEqual(5);
    expect(square(52)).toBeCloseTo(7.2, 1);
    expect(square(2)).toEqual(1.4142135623730951);
    expect(square(200)).toEqual(14.142135623730951);
    expect(square(5)).toEqual(2.23606797749979);
  });

  it("power works correctly", () => {
    expect(power(2, 3)).toEqual(8);
    expect(power(2, 10)).toEqual(1024);
    expect(power(6, 3)).toEqual(216);
    expect(power(10, 3)).toEqual(1000);
    expect(power(5, 5)).toEqual(3125);
  });

  it("is a number", () => {
    expect(isANumber(2)).toBeTruthy();
    expect(isANumber("cat")).toBeFalsy();
  });
  it("pythagoras", () => {
    expect(pythagoras(5, 3)).toEqual(5.830951894845301);
  });
});
