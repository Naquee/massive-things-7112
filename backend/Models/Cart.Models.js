const mongoose = require("mongoose");
const CartSchema = mongoose.Schema({
    name: { type: String },
    category: [{ type: String }],
    description: { type: String },
    price: { type: Number },
    quantity: { type: Number },
    purchaseQuantity:{ type: Number },
    discount: { type: Number },
    country: { type: String },
    img_path: { type: String },
    filename: { type: String },
    email: { type: String }
}, {
    timestamps: true
})
const CartModel = mongoose.model("carts", CartSchema);

module.exports = {
    CartModel
}

