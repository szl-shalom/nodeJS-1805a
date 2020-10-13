const http = require("http");
const fs = require("fs");
const path = require("path");
http.createServer((req, res) => {
    // 处理静态资源
    if(req.url === "/favicon.ico") return ;
    console.log(req.url)
    if (req.url === "/") {
        res.end(fs.readFileSync("public/index.html"))
    } else {
        res.end(fs.readFileSync(path.join("public", req.url)))
    }

}).listen(8080, () => {
    console.log("服务器在8080端口启动了")
})