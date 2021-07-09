const express = require('express');
const app = express();

// app.set('view engine', 'pug');

const signIn = require("./routes/signin");

app.use("/",signIn);



app.listen(3000,()=>{
    console.log("express has ran")
});