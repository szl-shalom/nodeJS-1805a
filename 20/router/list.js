const express = require("express");
const route = express.Router();
const fs = require("fs");
module.exports = route;



// 获取数据接口
route.get("/", (req, res) => {
    res.end(fs.readFileSync("mock/list.json", "utf-8"))
})
// 通过id 返回对应数据
route.post("/getData", (req, res) => {
    let data = JSON.parse(fs.readFileSync("mock/list.json", "utf-8"));
    res.send(data.find(item => item.id === req.body.id))
})
// 通过id 找到数据 并修改 flag
route.post("/modifyFlag", (req, res) => {
    let data = JSON.parse(fs.readFileSync("mock/list.json", "utf-8"));
    let obj = data.find(item => item.id === req.body.id);
    obj.flag = !obj.flag;
    fs.writeFileSync("mock/list.json",JSON.stringify(data))
    res.send({
        code: 1
    })
})