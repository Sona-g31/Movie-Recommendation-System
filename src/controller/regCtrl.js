const e = require("express");
let regService = require("../service/regService.js");

exports.regCtrl = (req, res) => {
  let { name, email, contact } = req.body;
  let result = regService.aceptRegData(name, email, contact);

  res.render("home.ejs", { resl: "Save Data" });
};

exports.homepage = (req, res) => {
  res.render("main.ejs");
};

exports.loginpage = (req, res) => {
  res.render("login.ejs", { mgs: null });
};

// exports.login = (req, res) => {
//   let { email, password } = req.body;
//   console.log(req.body);
//   let result = regService.login(email, password);
//   console.log(result + "s");
//   res.render("admin_dashboard.ejs");
// };

exports.login = async (req, res) => {
  let { email, password } = req.body;
  console.log(req.body);

  try {
    let role = await regService.login(email, password); // wait for the result
    console.log("Role: " + role);

    if (role === "ADMIN") {
      res.render("admin_dashboard.ejs");
    } else if (role === "USER") {
      res.render("user_dashboard.ejs", { username: role });
    } else {
      // res.render("login.ejs", { error: "Invalid credentials" });
    }
  } catch (err) {
    console.error("Login error:", err);
    // res.render("login.ejs", { error: "Server error occurred" });
  }
};

exports.Registation = (req, res) => {
  res.render("register.ejs");
};

exports.registration = (req, res) => {
  let { username, email, password, role } = req.body;
  console.log(req.body);
  let result = regService.saveReg(username, email, password, role);
  console.log(result);
  res.render("login.ejs", { mgs: result });
};
