const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {

  res.send("signIn sayfası");
});
router.post("/", (req, res) => {
  res.send("signIn  (POST Method)");
});

module.exports = router;
