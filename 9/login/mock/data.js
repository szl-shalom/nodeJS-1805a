const Mock = require("mockjs");
const fs = require("fs");

// 模拟数据
let data = Mock.mock({
    "list|20": [{
        "username": "@cname",
        "password": "@word(6,12)"
    }]
})
// 写入数据
fs.writeFileSync("user.json", JSON.stringify(data.list))