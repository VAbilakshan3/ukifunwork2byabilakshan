var mongoose = require("mongoose");
var schoolSchema = mongoose.Schema({
    name: String,
    tagline: String,
    place:String,
    date:Date&&String,
});

module.exports = mongoose.model("school", schoolSchema);