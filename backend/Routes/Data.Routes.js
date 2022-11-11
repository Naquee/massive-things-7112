const { Router } = require("express");
const { ProductModel } = require("../Models/Product.Models");
const Data = Router();

Data.get("/products", async (req, res) => {
    const data = await ProductModel.find();
    res.send(data)
})

module.exports = {
    Data
}