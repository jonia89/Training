// The meatGrinder returns some meat. Call it and return its result.
function shelf1() {
  function meatGrinder() {
    return "🍖";
  }
  const meat = meatGrinder();
  return meat;
}
console.log("1.", shelf1());

// Using a loop
function shelf2() {
  const food = "ababbbaaaabbbabbaaabab🍖abbbaaabbaba";
  for (character of food)
    if (character !== "a" && character !== "b") return character;
}
console.log("2.", shelf2());
// Using .split + .filter.
function shelf3() {
  const food = "ababbbaaaabbbabbaaabab🍖abbbaaabbaba";
  const splitted = food.split("ab");
  const meat = splitted.filter(
    (splitted) => !splitted.startsWith("b") && !splitted.startsWith("a")
  );
  return meat[3];
}
console.log("3.", shelf3());

function shelf31() {
  const food = "ababbbaaaabbbabbaaabab🍖abbbaaabbaba";
  const emoji = food.split(/.*?/u);
  const emojiFinded = emoji.filter((emoji) => emoji !== "a" && emoji !== "b");
  return emojiFinded;
}
console.log("3.1.", shelf31());
// Calculate the correct totalMeatCount. You are not allowed to
// use any number characters.
function shelf4() {
  let totalMeatCount = 0;
  const shelves = [
    { id: 1, meatCounts: [1] },
    { id: 2, meatCounts: [4, 9, 10] },
    { id: 3, meatCounts: [15, 10, 3, 2] },
    { id: 4, meatCounts: [4, 25, 10, 5, 6, 1] },
  ];

  // ↓↓↓ Code here
  let numbers = [];
  totalMeatCount = shelves.forEach((i) => {
    if (i.id) {
      numbers.push(...i.meatCounts);
    }
  });
  totalMeatCount = eval(numbers.join("+")); // eval() on huono, flatMap() on parempi
  console.log(totalMeatCount);
  // ↑↑↑

  if (totalMeatCount === 105) {
    return "🍖";
  }
}
console.log("4.", shelf4());

// The kids on the block put Keke's meat into a math problem.
//
// Solve the math problem.
function shelf5() {
  function multiply(x, y) {
    return Number(x * y);
  }
  // Implement a function called multiply and give it
  // proper arguments with x and y to reach 50.
  // Multiply should multiply the numbers.
  const x = 5;
  const y = 10;
  if (multiply(x, y) === 50) {
    return "🍖";
  }
}
console.log("5.", shelf5());
