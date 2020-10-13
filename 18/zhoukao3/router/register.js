const express = require("express");
const route = express.Router();
const fs = require("fs");


//   /api/register
route.post("/", (req, res) => {
    let data = JSON.parse(fs.readFileSync("mock/user.json"));
    let flag = data.some(item => item.username === req.body.username);

    if (flag) {
        res.send({ code:0 })
    } else {
        data.push(req.body);
        fs.writeFileSync("mock/user.json",JSON.stringify(data))
        res.send({code:1})
    }
})

module.exports = route;