const express = require("express");
var cors = require('cors');
const { connection } = require("./Config/db");
const { Member } = require("./Routes/Member.routes");
const app = express();
require("dotenv").config();
app.use(express.json());
app.use(cors());

app.use('/member', Member);

app.listen(process.env.PORT, async ()=>{
    try{
        await connection;
        console.log("Connected To DB");
    }catch(err){
        console.log(err);
    }
    console.log("Listening To Port", process.env.PORT);
})