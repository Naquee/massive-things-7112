const { Router } = require("express");
const { ProductModel } = require("../Models/Product.Models");
const Data = Router();

Data.get("/products", async (req, res) => {
    const { _sort, _order, country } = req.query;
    console.log(req.query)
    let sortData = {}
    sortData[_sort] = _order === 'desc' ? -1 : 1;

    if (country || sortData) {
        const data = await ProductModel.find({country: country}).sort(sortData);
        res.send(data)
    } else {
        const data = await ProductModel.find();
        res.send(data)
    }
})

module.exports = {
    Data
}