// 引入核心模块
const fs = require("fs");
const path = require("path");
const http = require("http");
const url = require("url");
// 起服务
const server = (req, res) => {
    // 获取访问的路径
    let pathname = url.parse(req.url, true).pathname;
    // 判断是不是根路径  条件成立 赋值index.html  不成立 还是本身
    pathname = pathname === "/" ? "index.html" : pathname
    // 判断是不是静态资源
    if (path.extname(pathname)) {
        // 拼接路径  public 返回读取的静态资源
        res.end(fs.readFileSync(path.join("dist", pathname)))
    }
    // 处理接口
    if (pathname === "/api/login") {
        // 解构获取的数据
        let {
            username,
            password
        } = url.parse(req.url, true).query
        if (username === "张三" && password === "123") {
            res.end("1")
        }else{
            res.end("0")
        }
    }

}
// 监听端口 8080
http.createServer(server).listen(8080, () => console.log("服务器在8080启动了"))