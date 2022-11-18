"use strict";
const imported = import("./w3h40.js").catch((err) => {
  console.log("Jotain meni vikaan... :(", Error);
});
console.log(imported);
