const express = require("express");
const app = express();
const port = 3000;
app.get("/", (req, res) => {
  console.log("Request to path /");
  res.send(`You throwed a dice and got ${Math.floor(Math.random() * 6) + 1}`);
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
