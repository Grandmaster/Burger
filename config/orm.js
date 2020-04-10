const connection = require("./connection.js");

const orm = {
  selectAll: function (table, cb) {
    connection.query("select * from ??", table, function (err, result) {
      cb(result);
    });
  },
};

module.exports = orm;
