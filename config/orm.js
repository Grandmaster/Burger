const connection = require("./connection.js");

const orm = {
  selectAll: function (table, cb) {
    connection.query("select * from ?", table, function (result) {
      cb(result);
    });
  },
};
