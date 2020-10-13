const http = require("http"); // 引入核心模块
const fs = require("fs");
// 创建服务  （开店）
const server = http.createServer((req, res) => {
    // req 请求体
    // res 响应体
    if (req.url == "/123") {
        res.end("hh")
    } else if (req.url == "/456") {
        res.end("xx")
    } else if (req.url === "/index.html") {
        res.end(fs.readFileSync("index.html"))
    } else {
        res.end("1805A")
    }
})
// 监听端口  端口号8080  （营业）
server.listen(8080, () => {
    // 回调函数
    console.log("服务器在8080端口启动了")
})