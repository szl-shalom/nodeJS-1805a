// 引入核心模块
const http = require("http");
const url = require("url");
const path = require("path");
const fs = require("fs");
const Mock = require("mockjs");
const data = Mock.mock({
    "list|20": [{
        name: "@cname", //随机名称
        age: "@integer(18,25)", //随机整数 18-25整数
        id: "@id", //随机id
        url: "@image(200x100)", //随机图片
        flag: "@boolean", //随机布尔值
        title: "@ctitle" //随机标题
    }]
})

// 服务
const server = (req, res) => {
    // 获取访问的路径             
    let pathname = url.parse(req.url, true).pathname;
    // 判断访问的是不是根路径
    pathname = pathname === "/" ? "index.html" : pathname
    // 判断是不是静态资源
    if (path.extname(pathname)) {
        // 返回静态资源
        res.end(fs.readFileSync(path.join("public", pathname)))
        return;
    }

    // 处理接口
    if (pathname === "/api/list") {
        res.setHeader("Content-type", "text/plain;charset=utf-8")
        res.end(JSON.stringify(data))
        return;
    }
    // 返回404 页面找不到
    res.end(fs.readFileSync("public/404.html"))

}
// 启动
http.createServer(server).listen(8080, () => console.log("server running in 8080 port !!!"))