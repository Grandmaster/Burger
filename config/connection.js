const mysql = require("mysql");

// Creating and using connection to burgers_db database
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Chidi17",
  database: "burgers_db",
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("Connected to database!");
});

// Exporting connection object
module.exports = connection;
