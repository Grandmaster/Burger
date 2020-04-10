// Dependencies
const express = require("express");
const burger = require("../models/burger.js");

const router = express.Router();

router.get("/", function (req, res) {
  burger.allBurgers(function (data) {
    var burg = { list: data };
    res.render("index", burg);
  });
});

router.post("/api/:burger", function (req, res) {
  console.log(req.params);
  res.end();
});

module.exports = router;
