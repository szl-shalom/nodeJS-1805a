const Mock = require("mockjs");
const fs = require("fs");
// 模拟
let data = Mock.mock({
    "list|5-10": [{
        username: "@cname",
        password: "@word(6,12)",
        id: "@id"
    }]
})


// 写入
fs.writeFileSync("data.json", JSON.stringify(data.list))