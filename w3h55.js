"use strict";
const fs = require("fs");
const text = fs.readFileSync("./sanojaSinulle.txt", {
  encoding: "utf8",
  flag: "r",
});

const fileReader = function (row) {
  if (!text) {
    return console.log("File not found");
  } else if (text === undefined) {
    return console.log("Empty file");
  } else if (text[row] > text.length || undefined) {
    return console.log("IndexError");
  }
};
module.exports = {
  fileReader,
};
console.log(text[44]);
