"use strict";
// Read this tutorial.
// https://www.javascripttutorial.net/es-next/javascript-object-spread/

// First, try in the browser console these commands line by line.
// Don't copy paste! Practice your muscle memory.
//
// const arr = [4, 5, 6]
// [1, 2, 3, ...arr]
// [...arr, 7, 8, 9]
// const obj = { name: 'Matti', surname: 'Virta', hasCats: true }
// { id: 'asdf', ...obj }
//

// Practice the spread syntax (...)
// You can on only use the variables shelfA, shelfB, the comma and the spread syntax.
function shelf1() {
  const shelfA = [1, 2, 3];
  const shelfB = [4, 5, 6];

  // combine A and B with "..."
  const arr = [...shelfA, ...shelfB]; // <- insert code between the brackets.

  if (arr.length === 6) {
    return "🍖";
  }
}
console.log(shelf1());

function shelf2() {
  const shelfInfo = { meatCount: 1, bestBeforeYear: 2025 };
  const shelfContent = { content: "🍖" };

  // combine shelfInfo and shelfContent with "..."
  const shelf = { ...shelfInfo, ...shelfContent }; // <- insert code between the curly brackets.

  if (shelf.content === "🍖") {
    return "🍖";
  }
}
console.log(shelf2());
// An apathetic Apatosaurus 🦕 forgot to do proper bookkeeping.
// This time he scrambled all the meatCounts inside his
// favorite text book.
//
// https://stackoverflow.com/questions/1623221/how-to-find-a-number-in-a-string-using-javascript
// Use .match with a proper Regex. (tip: g makes things easier)
function shelf3() {
  let meatCount = 0;
  const textBook =
    "Lorem 30 ipsum 12 dolor sit 44 amet, 99 consectetur adipiscing elit 5";

  // ↓↓↓ Code here
  meatCount = textBook.match(/\d+/g);
  meatCount = meatCount.reduce((a, b) => Number(a) + Number(b));
  console.log(meatCount);

  // ↑↑↑

  if (meatCount === 190) {
    return "🍖";
  }
}
console.log(shelf3());
