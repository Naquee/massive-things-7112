const { Router } = require("express");
const { AddressModel } = require("../Models/Address.Models");
const { CartModel } = require("../Models/Cart.Models");
const { ProductModel } = require("../Models/Product.Models");
const User = Router();

User.post("/address/add", async (req, res) => {
    const { email } = req.body;
    req.body.email = email;
    const userAddress = await AddressModel.findOne({ email: email })
    if (userAddress) {
        const newAddress = req.body;
        await AddressModel.replaceOne({ email: email }, newAddress)
        res.send({ msg: 'Address Updated', status: true })
    } else {
        const Address = new AddressModel(req.body);
        await Address.save();
        res.send({ msg: 'Address Added', status: true })
    }
})

User.get("/address/get", async (req, res) => {
    const { email } = req.body;
    const userAddress = await AddressModel.findOne({ email: email })
    if (userAddress) {
        res.send({ msg: 'Address Found', status: true, address: userAddress })
    } else {
        res.send({ msg: 'Address Not Found', status: false })
    }
})

User.post("/cart", async (req, res) => {
    const { _id, email, purchaseQuantity, name } = req.body;
    const cartData = await CartModel.find({ name: name, email: email });
    req.body._id = null
    if (cartData.length !== 0) {
        if (purchaseQuantity == 1) {
            await CartModel.updateOne({ name: name, email: email }, { $inc: { purchaseQuantity: 1 } });
            res.send({ msg: 'Product Added in cart', status: true })
        } else {
            await CartModel.updateOne({ name: name, email: email }, { purchaseQuantity: purchaseQuantity });
            res.send({ msg: 'Product Added in cart', status: true })
        }
    }
    else {
        const product = new CartModel(req.body);
        await product.save();
        res.send({ msg: 'Product Added in cart', status: true })
    }
})

User.get("/cart/get", async (req, res) => {
    const { email } = req.body;
    const cartData = await CartModel.find({ email: email })
    if (cartData.length !== 0) {
        res.send({ msg: 'Here Is you Product', status: true, cart: cartData })
    } else {
        res.send({ msg: 'Cart is empty', status: false })
    }
})

User.delete("/cart/delete/:name", async (req, res) => {
    const { name } = req.params;
    const { email } = req.body;
    const cartData = await CartModel.find({ name: name, email: email })
    if (cartData.length !== 0) {
        await CartModel.deleteOne({ name: name, email: email })
        res.send({ msg: 'Product Deleted From Cart', status: true })
    } else {
        res.send({ msg: 'Product Not Found', status: false })
    }
})

User.delete("/cart/delete/all/:name", async (req, res) => {
    const { name } = req.params;
    const cartData = await CartModel.find({email: name })
    if (cartData.length !== 0) {
        await CartModel.deleteMany({ email: name })
        res.send({ msg: 'Product Deleted From Cart', status: true })
    } else {
        res.send({ msg: 'Product Not Found', status: false })
    }
})



module.exports = {
    User
}