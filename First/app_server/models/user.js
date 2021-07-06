var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var userSchema = new Schema({
    firstName: String,
    lastName: String,
    userName: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});
var User = mongoose.model("user", userSchema);

module.exports = User;