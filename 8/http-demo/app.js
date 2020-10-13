// 引入核心内置模块
const http = require("http");
const fs = require("fs");
const url = require("url");
const path = require("path");
// 服务

const server = (req, res) => {
    // 获取访问的路径
    let pathname = url.parse(req.url, true).pathname
    // 判断是不是更路径  "/"
    if (pathname === "/") {
        pathname = "index.html";
    }
    // 判断是不是静态资源
    if (path.extname(pathname)) {
        res.end(fs.readFileSync(path.join("public", pathname)))
    }

}

// 监听服务
http.createServer(server).listen(8080, () => console.log("8080 running !!!"))