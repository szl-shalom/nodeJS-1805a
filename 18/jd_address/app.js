// 引入
const express = require("express");
const app = express();
// 引入路由
const LoginRoute = require("./router/login")
const AddressRoute = require("./router/address")
// 中间件
app.use(express.static("public", {
    index: "login.html"
}))
app.use(express.json()) // 处理 post json 数据  
app.use(express.urlencoded()) //处理表单

// 使用路由
app.use("/api/login", LoginRoute)
app.use("/api/address", AddressRoute)

// 监听端口 8080
app.listen(8080, () => {
    console.log("服务器在8080启动了！！")
})