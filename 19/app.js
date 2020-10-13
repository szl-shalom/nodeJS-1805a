// 引入
const express = require("express");
const app = express();
// 引入路由
const LoginRoute = require("./router/login")


// 中间件
app.use(express.static("public", {
    index: "login.html"
}))
app.use(express.json())
app.use(express.urlencoded())
// 使用路由
app.use("/api/login",LoginRoute)


// 起服务
app.listen(8080, () => console.log("服务器在8080启动了"))