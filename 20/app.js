// 引入
const express = require("express");
const app = express();
// 引入路由
const LoginRoute = require("./router/login")
const ListRoute = require("./router/list")
// 中间件
app.use(express.static("public",{
    index:"login.html"
}));
app.use(express.json())
app.use(express.urlencoded())

// 使用路由
app.use("/api/login", LoginRoute);
app.use("/api/list", ListRoute);

// 起服务
app.listen(8080, () => console.log("服务器启动了"))