let express = require("express");
let bodyparser = require("body-parser");
let router = require("./routes/regroutes.js");
let app = express();

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use("/", router);
app.use(express.static("public"));
app.set("view engine", "ejs");

module.exports = app;
