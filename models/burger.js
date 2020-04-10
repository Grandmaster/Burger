// Dependencies
const orm = require("../config/orm.js");

const burger = {
  allBurgers: function () {
    orm.selectAll("burgers", function (result) {
      console.log(result);
    });
  },
};

burger.allBurgers();
