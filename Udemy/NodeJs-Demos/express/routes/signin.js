const express = require("express");
const router = express.Router();

router.get("/signIn", (req, res) => {

  res.send("signIn sayfası");
});
router.post("/signIn", (req, res) => {
  res.send("signIn  (POST Method)");
});

module.exports = router;
