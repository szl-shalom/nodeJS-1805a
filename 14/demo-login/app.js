const express = require("express"); //引入express插件
const app = express() //获取顶层express对象
const fs = require("fs");
const {
    json
} = require("express");
let code = null; //验证码
let timer;
// 静态资源 中间件
app.use(express.static("public", {
    index: "login.html", //访问更路径 显示的页面 默认是index.html
}));

// 处理JSON POST 数据 中间件    数据会帮你绑定在 req.body
app.use(express.json())

// 登录接口
app.post("/api/login", (req, res) => {
    let {
        username,
        password
    } = req.body;
    let data = JSON.parse(fs.readFileSync("mock/data.json", "utf-8"));
    let flag = data.some(item => item.username === username && item.password === item.password)
    if (flag) {
        res.send({
            code: 1
        })
    } else {
        res.send({
            code: 0
        })
    }
})


// 验证码接口
app.get("/api/getCode", (req, res) => {
    clearTimeout(timer);
    code = Math.random().toString(36).slice(2, 6);
    console.log(code);
    res.send({
        code: 1
    })
    timer = setTimeout(() => {
        code = null;
        console.log("验证码失效了")
    }, 10000)
})

// 注册接口
app.post("/api/register", (req, res) => {
    if (req.body.code === code) {
        let {
            username
        } = req.body;
        let data = JSON.parse(fs.readFileSync("mock/data.json"))
        let flag = data.some(item => item.username === username);
        if (flag) {
            res.send({
                code: 0,
                mess: "此用户已存在，请重新注册"
            })
        } else {
            data.push(req.body);
            fs.writeFileSync("mock/data.json", JSON.stringify(data))
            res.send({
                code: 1,
                mess: "注册成功"
            })
        }
    } else {
        res.send({
            code: 0,
            mess: "验证码不正确！！！"
        })
    }

})




// 监听端口8080  启动服务
app.listen(8080, () => console.log("服务器在8080端口启动了！！！！"))