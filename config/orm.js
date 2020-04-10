const connection = require("./connection.js");

const orm = {
  selectAll: function (table, cb) {
    connection.query("select * from ??", table, function (err, result) {
      cb(result);
    });
  },
  insertOne: function (table, column, value, cb) {
    connection.query(
      "insert into ??(??) values (?)",
      [table, column, value],
      function (_, result) {
        cb(result);
      }
    );
  },
};

module.exports = orm;
