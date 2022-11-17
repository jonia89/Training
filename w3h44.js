"usse strict";
const express = require("express");
const app = express();
const port = 80;

app.get("http://13.49.159.47/health.html", (req, res) => {
  res.send("Healthy", "Unhelthy");
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
