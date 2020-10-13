const express = require("express"); //引入express插件
const app = express(); //获取express 顶层对象
const fs = require("fs");
// 处理静态资源服务器
app.use(express.static("public"))
//处理post  json
app.use(express.json())

app.post("/api/login", (req, res) => {
    let data = JSON.parse(fs.readFileSync("mock/data.json"))
    let { username,password } = req.body;
    if(data.some(item=>item.username === username && item.password === password)){
        res.send({
            code:1,
            mess:"登录成功"
        })
    }else{
        res.send({
            code:0,
            mess:"登录失败，请重新登录"
        })
    }
})
// 监听
app.listen(8080, () => console.log("服务在8080端口启动了"))