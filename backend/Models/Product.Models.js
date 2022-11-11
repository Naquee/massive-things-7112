const mongoose = require("mongoose");
const ProductSchema = mongoose.Schema({
    name: { type: String },
    category: [{ type: String }],
    description: { type: String },
    price: { type: Number },
    quantity: { type: Number },
    discount: { type: Number },
    country: { type: String },
    img_path: { type: String },
    filename: { type: String }
}, {
    timestamps: true
})
const ProductModel = mongoose.model("products", ProductSchema);

module.exports = {
    ProductModel
}

