var express = require("express");
var router = express.Router();
const ctrlLogin = require("../controller/loginController");


router.get("/", ctrlLogin.index);
router.post("/", ctrlLogin.indexPost);
router.post("/signup", ctrlLogin.signUpPost);
router.get("/signup", ctrlLogin.signUpIndex);

module.exports = router;