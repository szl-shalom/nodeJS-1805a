const Mock = require("mockjs");
let data = Mock.mock({
    "list|10-20": [{
        "name":"@cname",
        "title":"@ctitle",
        "url":"@image",
        "id":"@id"
    }]
})
console.log(data)