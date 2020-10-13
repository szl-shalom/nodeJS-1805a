const http = require("http");
const url = require("url");
const path = require("path");
const fs = require("fs");


http.createServer((req, res) => {
    let pathname = url.parse(req.url, true).pathname
    if (pathname === "/") {
        pathname = "login.html"
    }
    if (path.extname(pathname)) {
        res.end(fs.readFileSync(path.join("public", pathname)))
        return;
    }

    if (pathname === "/api/login") {
        let str = "";
        req.on("data", (chunk) => {
            str += chunk;
        })
        req.on("end", () => {
            let {
                username,
                password
            } = JSON.parse(str).data;
            let data = JSON.parse(fs.readFileSync("mock/data.json", "utf-8"))
            let flag = data.some(item => item.username === username && item.password === password);
            flag ? res.end("1") : res.end("0")
        })
    }


    if (pathname === "/api/register") {
        let str = "";
        req.on("data", (chunk) => {
            str += chunk;
        })
        req.on("end", () => {
            let {
                username,
                password
            } = JSON.parse(str).data;
            let data = JSON.parse(fs.readFileSync("mock/data.json", "utf-8"))
            let flag = data.some(item => item.username === username);
            if (flag) {
                res.end("0")
            } else {
                data.push(JSON.parse(str).data)
                fs.writeFileSync("mock/data.json", JSON.stringify(data))
                res.end("1")
            }
        })
    }
}).listen(8080, () => console.log("8080服务器启动了"))