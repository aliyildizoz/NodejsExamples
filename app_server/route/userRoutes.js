var express = require("express");
var router = express.Router();
const ctrlUser = require("../controller/userController");

router.get("/list", ctrlUser.index);
router.get("/delete/:username", ctrlUser.delete);

module.exports = router;
