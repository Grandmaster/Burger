// Dependencies
const orm = require("../config/orm.js");

const burger = {
  allBurgers: function (cb) {
    orm.selectAll("burgers", function (result) {
      cb(result);
    });
  },
  makeBurger: function (name, cb) {
    orm.insertOne("burgers", "burger_name", name, function (result) {
      cb(result);
    });
  },
};

module.exports = burger;
