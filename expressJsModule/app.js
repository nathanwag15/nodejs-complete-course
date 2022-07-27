const http = require("http");

const express = require("express");

const app = express();

// app.use((req, res, next) => {
//   console.log("in the middleware!");
//   next(); // Allows the request to continue to the next middleware in line
// });

app.use("/", (req, res, next) => {
  console.log("this always runs");
  next();
});

app.use("/add-product", (req, res, next) => {
  console.log("add product page");
  res.send("<h1>The add product page</h1>");
});

app.use("/", (req, res, next) => {
  console.log("in another middleware!");
  res.send("<h1>Hello from Express!</h1>");
});

app.listen(3000);
