const loginRoutes = require("./loginRoutes");
const homeRoutes = require("./homeRoutes");
const userRoutes = require("./userRoutes");

module.exports = function (app) {
    app.use("/login", loginRoutes);
    app.use("/", homeRoutes);
    app.use("/user", userRoutes);
}