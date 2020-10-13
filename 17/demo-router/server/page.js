const express = require("express");
const fs = require("fs");
// 新建路由
const route = express.Router();




route.get("/", (req, res) => {
    let {
        index,
        num
    } = req.query;
    let data = JSON.parse(fs.readFileSync("mock/data.json"))
    res.send({
        data: data.slice(index * num, (+index + 1) * num),
        maxCode: Math.ceil(data.length / num)
    })
})
// 抛出路由
module.exports = route;