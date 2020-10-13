const Mock = require("mockjs");
const fs = require("fs");
let data = Mock.mock({
    "list|1000": [{
        "id": "@id",
        "username": "@cname",
        "age|18-22": 1,
        "height|100-180": 1,
        "sex": "@boolean"
    }]
})
fs.writeFileSync("data.json", JSON.stringify(data.list))