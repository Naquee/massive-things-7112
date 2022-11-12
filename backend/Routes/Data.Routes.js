const { Router } = require("express");
const { ProductModel } = require("../Models/Product.Models");
const Data = Router();

Data.get("/products", async (req, res) => {
    const { _sort, _order } = req.query;
    console.log(req.query)
    let obj = {}
    obj[_sort] = _order === 'desc' ? -1 : 1;

    if (_sort) {
        const data = await ProductModel.find().sort(obj);
        res.send(data)
    } else {
        const data = await ProductModel.find();
        res.send(data)
    }
})

module.exports = {
    Data
}