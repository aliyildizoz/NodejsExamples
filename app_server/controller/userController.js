var path = require("path");
var express = require("express");
var User = require("../models/user");

module.exports.index = function (req, res) {
    User.find({}, (err, data) => {
        res.render("userlist", { users: data })
    });
}

module.exports.delete = function (req, res) {
    User.remove({ userName: req.params.username }, (err) => {
        if (err) {
            console.log(err)
        }
        res.redirect("/user/list");
    })
}