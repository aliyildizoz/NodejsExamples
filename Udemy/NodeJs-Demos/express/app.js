const express = require("express");
const app = express();

const signIn = require("./routes/signin");
const signUp = require("./routes/signup");

app.use((req, res, next) => {
  const isLogin = true;  
  if (isLogin) {
    next();
  } else {
    res.send("Lütfen giriş yapın");
  }
});

app.use("/", signIn);
app.use("/", signUp);

app.listen(3000, () => {
  console.log("express has ran");
});
