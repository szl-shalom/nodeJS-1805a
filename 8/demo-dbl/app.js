const fs = require("fs");
const http = require("http");
const path = require("path");
const url = require("url");

const server = (req, res) => {
    // 获取访问的路径
    let pathname = url.parse(req.url, true).pathname;
    // 判断是不是根路径
    pathname = pathname === "/" ? "index.html" : pathname;
    // 判断是不是静态资源
    if (path.extname(pathname)) {
        // 返回读取的静态资源
        res.end(fs.readFileSync(path.join("public", pathname)))
    }
}

http.createServer(server).listen(8080, () => console.log("8080 !!!!"))