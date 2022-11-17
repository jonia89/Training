"use strict";
const fs = require("fs");
const text = fs.readFileSync("./sanoja.txt", { encoding: "utf8", flag: "r" });
const textArr = text.split(", ");
textArr.sort();
console.log(textArr.join("\n"));
const copy = fs
  .writeFileSync("sanojaSinulle.txt", textArr.join("\n"))
  .catch((err) => {
    console.log("Jotain meni vikaan... :(", Error);
  });
