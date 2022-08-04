const http = require("http");
const bodyParser = require("body-parser");

const express = require("express");
const path = require("path");

const app = express();

const loginRoutes = require("./routes/login");
const templateRoutes = require("./routes/templates");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/login", loginRoutes);
app.use(templateRoutes);

app.listen(3000);
