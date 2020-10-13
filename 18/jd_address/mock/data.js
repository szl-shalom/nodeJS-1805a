const Mock = require("mockjs");
const fs = require("fs");



let data = Mock.mock({

    "list|5": [{
        user: "@cname",
        "tel": "@integer(13000000000,19999999999)",
        address: "@city",
        id:"@id"
    }]
})

fs.writeFileSync("data.json", JSON.stringify(data.list))