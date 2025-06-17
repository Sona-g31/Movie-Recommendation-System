const { json } = require("body-parser");
let conn = require("../../db.js");

exports.saveUser = (...regData) => {
  console.log(regData);
  return "yes";
};

exports.registraionsave = (...regData) => {
  console.log("-----------");
  console.log(regData);
  conn.query(
    "INSERT INTO users (username, email, password, role) VALUES (?, ?, ?, ?)",
    regData,
    (err, result) => {}
  );
  return "Register user Sucessfully...";
};

// login

// exports.login = (...regData) => {
//   console.log("-----------");
//   var rol = " ";
//   console.log(regData);
//   conn.query(
//     "select role from users where email=? and password=?;",
//     regData,
//     (err, result) => {
//       if (err) {
//         console.log("faild" + err);
//       } else {
//         rol = result[0].role;
//       }
//     }
//   );
//   console.log(rol);
//   return "Login user Sucessfully...";
// };

exports.login = (email, password) => {
  return new Promise((resolve, reject) => {
    conn.query(
      "SELECT role FROM users WHERE email = ? AND password = ?;",
      [email, password],
      (err, result) => {
        if (err) {
          console.log("Failed: " + err);
          return reject("Database error");
        }

        if (result.length === 0) {
          return resolve(null); // No user found
        }

        const role = result[0].role;
        console.log("Logged in as:", role);
        return resolve(role);
      }
    );
  });
};
