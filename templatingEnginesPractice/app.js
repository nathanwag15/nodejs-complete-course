const http = require("http");
const bodyParser = require("body-parser");

const express = require("express");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const users = ["Hello"];

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res, next) => {
  res.render("add-user", { pageTitle: "users", path: "/" });
});

app.post("/add-user", (req, res, next) => {
  users.push({ username: req.body.user });
  console.log(users);
  res.redirect("/users");
});

app.get("/users", (req, res, next) => {
  res.render("users", { pageTitle: "users", path: "/users", users: users });
});

app.use((req, res, next) => {
  res.status(404).render("404", { pageTitle: "404", path: "/404" });
});

app.listen(3000);
