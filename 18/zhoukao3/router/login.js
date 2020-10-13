const express = require("express");
const route = express.Router();
const fs = require("fs");
//  /api/login
route.post("/", (req, res) => {
    let data = JSON.parse(fs.readFileSync("mock/user.json"));
    let flag = data.some(item => {
        return item.username === req.body.username && item.password === req.body.password;
    })
    flag ? res.send({ code:1 }) : res.send({ code:0 })
})







module.exports = route;