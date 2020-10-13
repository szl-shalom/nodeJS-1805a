const Mock = require("mockjs");
const fs = require("fs");


let data = Mock.mock({
    "user|5": [{
        username: "@cname",
        password: "@word(6,12)"
    }],
    "list|10": [{
        username: "@cname",
        id: "@id",
        age: "@integer(18,26)"
    }]
})


fs.writeFileSync("data.json", JSON.stringify(data.list))
fs.writeFileSync("user.json", JSON.stringify(data.user))