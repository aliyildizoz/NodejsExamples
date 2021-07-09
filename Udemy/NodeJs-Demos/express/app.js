const express = require("express");
const app = express();

const signIn = require("./routes/signin");
const signUp = require("./routes/signup");

//helpers
const isLogin = require("./helpers/isLogin");

app.use(isLogin);
app.use("/", signIn);
app.use("/", signUp);

app.listen(3000, () => {
  console.log("express has ran");
});
