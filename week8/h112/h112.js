const express = require("express");
const app = express();
const passport = require("passport");
const OAuth2Strategy = require("passport-oauth2");
const session = require("express-session");
const { CognitoIdentityServiceProvider } = require("aws-sdk");

const cognitoClient = new CognitoIdentityServiceProvider({
  region: "eu-north-1",
});
const dotenv = require("dotenv");
dotenv.config();
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);
app.use(passport.session());
passport.serializeUser(function (user, done) {
  done(null, user);
});
passport.deserializeUser(function (user, done) {
  done(null, user);
});
passport.use(
  new OAuth2Strategy(
    {
      authorizationURL:
        "https://jonipool.auth.eu-north-1.amazoncognito.com/oauth2/authorize",
      tokenURL:
        "https://jonipool.auth.eu-north-1.amazoncognito.com/oauth2/token",
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: "http://localhost:8080/auth/example/callback",
    },
    function (accessToken, refreshToken, profile, cb) {
      cognitoClient.getUser({ AccessToken: accessToken }, (err, userData) => {
        for (const attributes of userData.UserAttributes) {
          if (attributes.Name === "email") {
            profile.email = attributes.Value;
          }
        }
        console.log(err);
        console.log(userData);
        return cb(null, profile);
      });
    }
  )
);
app.get("/", function (req, res) {
  console.log("/", req.user);
  res.send(
    `Hello world - ${
      req.user?.email || "Not logged in"
    } - <a href="/auth/example">Login</a>`
  );
});
app.get("/auth/example", passport.authenticate("oauth2"));
app.get(
  "/auth/example/callback",
  passport.authenticate("oauth2", { failureRedirect: "/login" }),
  function (req, res) {
    // Successful authentication, redirect home.
    // const User = req.User;
    res.redirect("/");
  }
);
app.get("/logout", function (req, res) {
  res.send(`Goodbye world - <a href="/auth/example">Logout</a>`);
  req.logout(function (err) {
   console.log(err)
    res.redirect("http://localhost:8080");
  });
});

app.listen(8080);
console.log("Listening");
