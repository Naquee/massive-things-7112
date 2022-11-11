const { UserModel } = require("../Models/User.models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const member = () => async (req, res) => {
    const { email } = req.body;
    const user = await UserModel.findOne({ email: email })
    if (user) {
        const { email, password } = req.body;
        const user = await UserModel.findOne({ email: email });
        const hashedPassword = user?.password;
        if (user) {
            bcrypt.compare(password, hashedPassword, function (err, result) {
                if (result) {
                    const token = jwt.sign({ email: user.email }, process.env.SECRET_KEY);
                    if (user.role === 'admin') {
                        res.send({ msg: "Login Successfull", status: true, token: token, isAdmin: true, user: user });
                    } else {
                        res.send({ msg: "Login Successfull", status: true, token: token, user: user });
                    }

                } else {
                    res.send({ msg: "Invalid Credentials", status: false });
                }
            });
        } else {
            res.send({ msg: "Invalid Credentials", status: false });
        }
    } else {
        const { email, password } = req.body;
        bcrypt.hash(password, 5, async function (err, hashPassword) {
            if (err) {
                res.send(err)
            } else {
                const newUser = new UserModel({
                    email: email,
                    password: hashPassword,
                })
                await newUser.save();
                res.send({ msg: "Signup Successfull", status: true })
            }
        });
    }
}

module.exports = {
    member
}