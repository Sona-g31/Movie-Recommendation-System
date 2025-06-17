let mysql = require("mysql");
require("dotenv").config();
let conn = mysql.createConnection({
  user: process.env.db_user || "root",
  password: process.env.db_pass || "root",
  host: process.env.host || "localhost",
  database: process.env.db_name || "movie_recommendation",
});

if (conn != null) {
  console.log("Database Connected");
} else {
  console.log("Not Connect...");
}

module.exports = conn;
