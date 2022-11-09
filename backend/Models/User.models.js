const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
    email: { type: String },
    name: { type: String },
    password: { type: String },
    phone: { type: String },
    role: { type: String, default: "user" }
})
const UserModel = mongoose.model("users", userSchema);

module.exports = {
    UserModel
}

