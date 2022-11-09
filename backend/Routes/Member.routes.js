const { Router } = require("express");
const { member } = require("../Controllers/Member.controller");
const Member = Router();

Member.post("/", member());

module.exports = {
    Member
}