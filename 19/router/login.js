const express = require("express");
const route = express.Router();
const fs = require("fs");

route.post("/", (req, res) => {
    // 读取(本地)数据
    let data = JSON.parse(fs.readFileSync("mock/user.json"))
    // 获取数据（前端的用户名和密码）

    // 判断用户密码书否存在
    let flag = data.some(item => item.username === req.body.username && item.password === req.body.password )
    // 返回结果
    flag ? res.send( { code:1 } ) :res.send( { code:0} )
})  




module.exports = route;