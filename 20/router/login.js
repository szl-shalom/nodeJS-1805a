const express = require("express");
const route = express.Router();
const fs = require("fs")
module.exports = route;



route.post("/", (req, res) => {
    let data = JSON.parse(fs.readFileSync("mock/user.json", "utf-8"));
    let flag = data.some(item => item.username === req.body.username && item.password === req.body.password);
    flag ?
        res.send({
            code: 1
        }) :
        res.send({
            code: 0
        })
})

route.post("/register", (req, res) => {
    let data = JSON.parse(fs.readFileSync("mock/user.json", "utf-8"));
    let flag = data.some(item => item.username === req.body.username);


    if (flag) {
        res.send({
            code: 0
        })
    } else {
        data.push(req.body);
        fs.writeFileSync("mock/user.json",JSON.stringify(data))
        
        res.send({
            code: 1
        })
    }





})