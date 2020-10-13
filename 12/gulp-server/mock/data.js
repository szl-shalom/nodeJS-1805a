const Mock = require("mockjs");
const fs = require("fs");
let data = Mock.mock({
    "list|10": [{
        "name": "@cname",
        "age": "@integer(18,30)",
        "url": "@image(200x100,@color,@cname)",
    }]
})

fs.writeFileSync("data.json", JSON.stringify(data.list))