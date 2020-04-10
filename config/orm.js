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
  updateOne: function (
    table,
    setColumn,
    setValue,
    conditionColumn,
    conditionValue,
    cb
  ) {
    connection.query(
      "update ?? set ?? = ? where ?? = ?",
      [table, setColumn, setValue, conditionColumn, conditionValue],
      function (_, result) {
        cb(result);
      }
    );
  },
};

module.exports = orm;
