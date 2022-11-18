"usse strict";
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/store", (req, res) => {
  res.send("Welcome to Joni's store!");
});
app.get("/store/vegetables", (req, res) => {
  res.json([
    { name: "cucumber", price: 2 },
    { name: "potato", price: 1 },
  ]);
});
app.get("/store/fruits", (req, res) => {
  res.json([
    { name: "banana", price: 2 },
    { name: "apple", price: 1 },
  ]);
});
app.post("/store", (req, res) => {
  res.send("Got a POST request at /store");
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
