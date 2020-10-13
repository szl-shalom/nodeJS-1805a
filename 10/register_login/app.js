const http = require("http");
const fs = require("fs");
const url = require("url");
const path = require("path");
http.createServer((req, res) => {
    let pathname = url.parse(req.url, true).pathname;
    pathname = pathname === "/" ? "login.html" : pathname
    path.extname(pathname) && res.end(fs.readFileSync(path.join("public", pathname)))

    // 登录接口
    if (pathname === "/api/login") {
        // 获取数据
        let str = "";
        // data事件   接受二进制流数据
        req.on("data", (chunk) => {
            str += chunk
        })
        // end事件   说明数据接受完毕
        req.on("end", () => {
            // 获取数据用户名和密码
            let {
                username,
                password
            } = JSON.parse(str).data;
            // 读取本地用户数据
            let data = JSON.parse(fs.readFileSync("mock/data.json", "utf-8"))
            // 判断是否存在
            let flag = data.some(item => item.username === username && item.password === password)
            // 返回数据
            flag ?
                res.end("1") :
                res.end("0")

        })

    }

    // 注册接口
    if (pathname === "/api/register") {
        let str = "";
        req.on("data", (chunk) => {
            str += chunk;
        })
        req.on("end", () => {
            let {
                username,
                passwprd
            } = JSON.parse(str).data;
            let data = JSON.parse(fs.readFileSync("mock/data.json", "utf-8"))
            let flag = data.some(item => item.username === username);
            if (flag) {
                res.end("0")
            } else {        
                data.push(JSON.parse(str).data);
                fs.writeFileSync("mock/data.json",JSON.stringify(data))
                res.end("1")
            }
        })
    }
}).listen(8080, () => console.log("8080!!!"))