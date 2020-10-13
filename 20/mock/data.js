const Mock = require("mockjs");
const fs = require("fs");

let data = Mock.mock({
    "list|5": [{
        "url": "@image(200x100,@color)",
        "id": "@id",
        "flag": false,
        "title": "@ctitle",
        "auther": "@cname",
        "desc": "@cword(10,20)"
    }],
    "user|5": [{
        username: "@cname",
        password: "@word(6,12)"
    }]
})

fs.writeFileSync("list.json", JSON.stringify(data.list))
fs.writeFileSync("user.json", JSON.stringify(data.user))