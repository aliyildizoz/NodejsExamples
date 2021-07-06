var path = require("path");
var express = require("express");
var User = require("../models/user");

module.exports.index = function (req, res) {

    res.render("login");
}


module.exports.indexPost = function (req, res) {
    User.find({ userName: req.body.username, password: req.body.password }, (err, data) => {
        var user = {}
        if (err) {
            console.log(err)
            res.render("login", user);
        } else {
            user.firstName = data[0].firstName;
            user.lastName = data[0].lastName
            console.log(data)
        }
        res.render("login", user);
    });
}

module.exports.signUpIndex = function (req, res) {

    res.render("signup");
}


module.exports.signUpPost = function (req, res) {
    var newUser = new User({
        firstName: req.body.firstname,
        lastName: req.body.lastname,
        userName: req.body.username,
        password: req.body.password
    });
    newUser.save((err) => {
        if (err) {
            console.log("error:", err);
        } else {
            console.log("user saved");

            res.redirect("/user/list");
        }
    })

}