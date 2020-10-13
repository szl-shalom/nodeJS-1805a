const express = require("express");
const app = express();
const fs = require("fs");
const LoginRoute = require("./router/login")
const RegisterRoute = require("./router/register");
const DataRoute = require("./router/data")
app.use(express.static("public", {
    index: "login.html"
})); //静态资源
app.use(express.json()) // 处理 json post 数据


// 使用登录路由
app.use("/api/login", LoginRoute)
// 使用注册路由
app.use("/api/register", RegisterRoute)
// 使用数据路由
app.use("/api/data",DataRoute)


app.all("*", (req, res) => {
    res.end(fs.readFileSync("public/404.html"))
})

app.listen(8080);