const express = require("express");
var cors = require('cors');
const { connection } = require("./Config/db");
const { Member } = require("./Routes/Member.routes");
const { authentication } = require("./Middleware/Authentication");
const { authorization } = require("./Middleware/Authorization");
const { Dashboard } = require("./Routes/Dashboard.Routes");
const { Data } = require("./Routes/Data.Routes");
const { User } = require("./Routes/User.Routes");
const app = express();
require("dotenv").config();
app.use(express.json());
app.use(cors());

app.use('/member', Member);
app.use('/user', authentication, authorization(['admin', 'user']), User);
app.use('/dashboard', authentication, authorization(['admin']), Dashboard);
app.use('/data', Data);
app.use('/resources/images', express.static('images'));

app.listen(process.env.PORT, async () => {
    try {
        await connection;
        console.log("Connected To DB");
    } catch (err) {
        console.log(err);
    }
    console.log("Listening To Port", process.env.PORT);
})