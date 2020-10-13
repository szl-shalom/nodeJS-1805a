const Mock = require("mockjs");
const fs = require("fs");


fs.writeFileSync("data.json", JSON.stringify(Mock.mock({
    "list|106": [{
        username: "@cname",
        url: "@image(200x100,@color,@city)",
        "id|+1": 1
    }]
}).list))