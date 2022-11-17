// Use a return.
function shelf1() {
  const food = "🍖";
  return food;
}
console.log(shelf1());
// Using a loop or .filter, find the meat piece
function shelf2() {
  const food = ["a", "a", "a", "a", "b", "a", "b", "b", "🍖", "a", "b", "a"];
  let finded = food.filter((food) => food !== "a" && food !== "b");
  return finded;
}
console.log(shelf2());
// Calculate the correct meatCount. You are not allowed to
// use any number characters.
function shelf3() {
  let meatCount = 0;
  const shelves = [
    { id: 1, shelfMeatCount: 1 },
    { id: 2, shelfMeatCount: 19 },
    { id: 3, shelfMeatCount: 31 },
    { id: 4, shelfMeatCount: 54 },
  ];

  // ↓↓↓ Code here
  meatCount = shelves.reduce(
    (start, end) => start + end.shelfMeatCount,
    meatCount
  );
  console.log(meatCount);
  // ↑↑↑

  if (meatCount === 105) {
    return "🍖";
  }
}
//console.log(meatCount);
console.log(shelf3());
// The kids on the block put Keke's meat into JSON and
// then stringified it! Can you parse it?
//
// You need to use JSON.parse in this exercise. No loops.
function shelf4() {
  const jsonAsString = '{"meat":"🍖"}';
  const parsed = JSON.parse(jsonAsString);
  return parsed.meat;
}
console.log(shelf4());
// An apathetic Apatosaurus 🦕 forgot to do proper bookkeeping.
//
// Convert the date object to a string in the format YYYY-MM-DD.
// You are not allowed to write the string 2022-09-23.
function shelf5() {
  const timestamp = new Date();

  let time = `${timestamp.toISOString()}`;
  // ← You are allowed to edit this line.
  console.log(time);
  if (time.startsWith("2022-09-23")) {
    return "🍖";
  }
}

console.log(shelf5());
