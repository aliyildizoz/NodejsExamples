const express = require("express");
const app = express();

const signIn = require("./routes/signin");
const signUp = require("./routes/signup");
const user = require("./routes/user");

//helpers
const isLogin = require("./helpers/isLogin");

app.set('view engine', 'pug');


app.use(isLogin);
app.use("/signIn", signIn);
app.use("/signUp", signUp);
app.use("/user", user);
app.use((err, req, res, next) => {
    res.status(err.status);
    console.log("error")
    res.render("error",{ 
        message: err.message,
        status: err.status
    })
})
app.listen(3000, () => {
  console.log("express has ran");
});
