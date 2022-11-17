const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/store", (req, res) => {
  res.send("Welcome to Joni's store");
});
app.get("/store/fruit", (req, res) => {
  res.json([{ name: "banana", price: 3 }]);
});
app.get("/store/vegetables", (req, res) => {
  res.json([
    { name: "cucumber", price: 2 },
    { name: "potato", price: 1 },
  ]);
});
app.get("/", (req, res) => {
  res.redirect("/store");
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
