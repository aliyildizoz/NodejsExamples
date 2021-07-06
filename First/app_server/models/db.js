var mongoose = require("mongoose");

mongoose.Promise = require("bluebird")

var mongoDB = "mongodb://localhost/NodeDemo";

mongoose.connect(mongoDB, (err) => {
    if (err) {
        console.error("\x1b[31m","mongoose error: ",err);
    }else{
        console.error("\x1b[32m","mongoose success connect:","\x1b[36m",mongoDB)
    }

})