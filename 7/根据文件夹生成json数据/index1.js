const fs = require("fs");
const path = require("path");



let data = JSON.parse(fs.readFileSync("data.json", "utf-8"));

const JSONToDir = (data) => {
    if (data.type === "file") {
        // 是文件
        fs.writeFileSync(data.pathname, data.content)
    } else {
        // 是文件夹
        fs.mkdirSync(data.pathname); //创建文件夹
        data.children.forEach(item => {
            JSONToDir(item)
        })
    }
}



JSONToDir(data)