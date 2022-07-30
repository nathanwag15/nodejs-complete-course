const express = require("express");
const path = require("path");
const router = express.Router();

router.use("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "template.html"));
});

module.exports = router;
