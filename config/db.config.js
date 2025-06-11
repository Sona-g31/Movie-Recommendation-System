// const mysql = require("mysql");
// require('dotenv').config();

// const conn = mysql.createConnection({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME
// });

// conn.connect((err) => {
//   if (err) {
//     console.log(" Database connection failed:", err.message);
//   } else {
//     console.log(" Database is connected");
//   }
// });

// module.exports = conn;


const mysql = require("mysql");
require('dotenv').config();

module.exports = () => {
  const conn = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  });

  conn.connect((err) => {
    if (err) {
      console.log("MySQL connection failed:", err.message);
    } else {
      console.log("MySQL connected");
    }
  });

  return conn;
};
