const http = require("http");

const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("Login System Initialize");
  next();
});

app.use("/users", (req, res, next) => {
  console.log("list of users");
  res.send(
    "<ul><li>User 1</li><li>User 2</li><li>User 3</li><li>User 4</li></ul>"
  );
});

app.use((req, res, next) => {
  console.log("Front Page");
  res.send("<h2>This is my Login App</h2>");
});

app.listen(3000);
