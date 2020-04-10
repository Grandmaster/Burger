const mysql = require("mysql");
var connection;

// Creating and using connection to burgers_db database
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Chidi17",
    database: "burgers_db",
  });
}

connection.connect(function (err) {
  if (err) throw err;
  console.log("Connected to database!");
});

// Exporting connection object
module.exports = connection;
