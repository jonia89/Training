const express = require("express");
const app = express();
const port = 3000;
const basicAuth = require("express-basic-auth");

app.use(
  basicAuth({
    users: { admin: "supersecret", adam: "password1234", eve: "asdfghjkl" },
  })
);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
