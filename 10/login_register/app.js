const http = require("http");
const fs = require("fs");
const url = require("url");
const path = require("path");
const data = require("./mock/data.json")

const server = (req, res) => {
    let pathname = url.parse(req.url, true).pathname;
    pathname = pathname === "/" ? "login.html" : pathname;
    path.extname(pathname) && res.end(fs.readFileSync(path.join("public", pathname)))

    // 接口
    if (pathname === "/api/login") {
        // data事件  发送数据的过程中会触发  chunk是每一段的二进制数据
        let str = "";
        req.on("data", (chunk) => {
            str += chunk;
        })
        // end事件   数据接受完毕  
        req.on("end", () => {
            // 解构数据
            let { username,password } = JSON.parse(str).data
            // 判断用户
            let flag =  data.some(item=>item.username === username && item.password === password)
            // 返回信息
            flag ? res.end("1") :res.end("0")
            
        })
    }
}

http.createServer(server).listen(8080, () => console.log("服务器启动了"))