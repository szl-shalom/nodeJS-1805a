const Mock = require("mockjs");
const fs = require("fs");
let data = Mock.mock({
    "list":[{
        "username":"@cname",
        "password":"@word(6,12)"
    }]
})
fs.writeFileSync("data.json",JSON.stringify(data.list))
