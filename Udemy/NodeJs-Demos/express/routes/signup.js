const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {

  res.send("signUp sayfası");
});
router.post("/", (req, res) => {
  res.send("signUp  (POST Method)");
});

module.exports = router;
