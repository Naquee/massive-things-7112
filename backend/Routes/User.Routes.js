const { Router } = require("express");
const { AddressModel } = require("../Models/Address.Models");
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
    if(userAddress){
        res.send({ msg: 'Address Found', status: true, address: userAddress })
    }else{
        res.send({ msg: 'Address Not Found', status: false})
    }
})


module.exports = {
    User
}