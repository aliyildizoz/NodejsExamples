var express = require("express");
var router = express.Router();
const ctrlHome = require("../controller/homeController");


router.get("/", ctrlHome.index);


module.exports = router;