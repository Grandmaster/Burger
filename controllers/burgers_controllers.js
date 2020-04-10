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
  var name = req.params.burger;
  burger.makeBurger(name, function () {
    res.status(200).end();
  });
});

module.exports = router;
