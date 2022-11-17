const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
app.use(cookieParser());
app.use(express.json());
const sessionDb = {};
function randomId() {
  return (Math.random() + 1).toString(36).substring(2); // Tämä on tietoturvariski
}
app.get("/", function (req, res) {
  console.log("Cookies: ", req.cookies);
  console.log("Signed Cookies: ", req.signedCookies);
  const hash = req.cookies.session;
  const username = sessionDb[hash];
  res.send(`Hei ${username || "You are not logged in"}!`);
});
app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  if (
    (username === "joni" && password === "passu1234") ||  // Tämä on tietoturvariski
    (username === "haisuli" && password === "pahis123")   // Tämä on tietoturvariski 
  ) {
    const hash = randomId();
    sessionDb[hash] = username;
    res.cookie("session", hash, { maxAge: 900000, httpOnly: true });
    res.send(`Hello ${username.toUpperCase()}`);
  } else {
    res.sendStatus(401);
    console.log("Wrong username or password");
  }
});
app.listen(8080);
console.log("Listening port 8080");
