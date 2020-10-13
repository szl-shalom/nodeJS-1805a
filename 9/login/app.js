// 引入核心模块
const http = require("http");
const fs = require("fs");
const url = require("url");
const path = require("path");
// 获取模拟的数据
const user = require("./mock/user.json")
// 服务
const server = (req, res) => {
    // 获取访问的路径
    let pathname = url.parse(req.url, true).pathname;
    // 判断是不是根路径
    pathname = pathname === "/" ? "index.html" : pathname;
    //  判断是静态资源  =>  返回静态资源
    path.extname(pathname) && res.end(fs.readFileSync(path.join("public", pathname)))
    // 处理接口
    if (pathname === "/api/login") {
        // 获取前传来的数据
        let {
            username,
            password
        } = url.parse(req.url, true).query;
        console.log(username,password)
        // 判断用户名和密码是否存在
        let flag = user.some(item => item.username === username && item.password === password)
        // 返回数据
        if (flag) {
            res.end("1")
        } else {
            res.end("0")
        }

    }
}
// 监听
http.createServer(server).listen(8080, () => console.log("服务器启动了"))