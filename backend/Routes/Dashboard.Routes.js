const { Router } = require("express");
const { UserModel } = require("../Models/User.models");
const multer = require('multer');
const { ProductModel } = require("../Models/Product.Models");
const Dashboard = Router();
var fs = require("fs");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './images/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});
const upload = multer({ storage: storage });

Dashboard.get("/users", async (req, res) => {
    const { email } = req.body
    const data = await UserModel.find();
    const userData = await UserModel.findOne({ email: email });
    const userDetails = {
        email: userData.email,
        role: userData.role,
    }
    res.send({ status: true, users: data, user: userDetails })
})

Dashboard.get("/products", async (req, res) => {
    const data = await ProductModel.find();
    res.send({ status: true, productsData: data, })
})

Dashboard.post("/product/add", upload.single("image"), async (req, res) => {
    const { category, country } = req.body
    const { filename } = req.file;
    const img_path = `/resources/images/${filename}`;
    const catArr = [];
    catArr.push(country);
    catArr.push(category);
    req.body.filename = filename;
    req.body.img_path = img_path;
    req.body.category = catArr
    const data = req.body;
    const checkImage = await ProductModel.findOne({ img_path: data.img_path });
    if (checkImage) {
        res.send("Image Already In System");
    } else {
        const addNewData = new ProductModel(data);
        await addNewData.save();
        res.send('Data Uploaded');
    }
})

Dashboard.delete("/product/delete/:id", async (req, res) => {
    const { id } = req.params
    try {
        const checkImage = await ProductModel.findOne({ _id: id });
        var filePath = `./images/${checkImage.filename}`;
        fs.unlinkSync(filePath);
        const check = await ProductModel.deleteOne({ _id: id });
        res.send({ msg: 'Product Deleted Successfully', status: true })
    } catch (err) {
        res.send({ msg: 'Product Not Found', status: false })
    }
});

Dashboard.delete("/delete/user/:id", async (req, res) => {
    const { id } = req.params
    try {
        const check = await UserModel.deleteOne({ _id: id });
        res.send({ msg: 'User Deleted Successfully', status: true })
    } catch (err) {
        res.send({ msg: 'User Not Find', status: false })
    }
});


module.exports = {
    Dashboard
}