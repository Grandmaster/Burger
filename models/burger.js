// Dependencies
const orm = require("../config/orm.js");

const burger = {
  allBurgers: function (cb) {
    orm.selectAll("burgers", function (result) {
      cb(result);
    });
  },
};

module.exports = burger;
