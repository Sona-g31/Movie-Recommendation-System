let routes = require("express");
let regCtrl = require("../controller/regCtrl.js");
let router = routes.Router();
router.post("/", regCtrl.regCtrl);
router.get("/home", regCtrl.homepage);
router.get("/login", regCtrl.loginpage);
router.get("/reg", regCtrl.Registation);
// /api/register

router.post("/api/register", regCtrl.registration);
//
// api/login
router.post("/api/login", regCtrl.login);

module.exports = router;
