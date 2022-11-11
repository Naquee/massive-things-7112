const mongoose = require("mongoose");
const AddressSchema = mongoose.Schema({
    fname: { type: String },
    lname: { type: String },
    contact: { type: Number },
    state: { type: String },
    address: { type: String },
    city: { type: String },
    zip: { type: String },
    email: { type: String }
})
const AddressModel = mongoose.model("address", AddressSchema);

module.exports = {
    AddressModel
}
