const http = require("http");

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// app.use((req, res, next) => {
//   console.log("in the middleware!");
//   next(); // Allows the request to continue to the next middleware in line
// });

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/add-product", (req, res, next) => {
  console.log("in another middleware!");
  res.send(
    '<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></input></form>'
  );
});

app.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
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
