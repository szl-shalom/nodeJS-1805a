const express = require("express");
const app = express();
const fs = require("fs");
const Mock = require("mockjs");
const {
    mock
} = require("mockjs");
app.use(express.static("public")) //静态资源中间件
app.use(express.json()); //处理 post json

// 数据访问接口
app.get("/api/list", (req, res) => {
    // 读取文件返回数据
    res.send(fs.readFileSync("mock/data.json"))
})

// 数据删除接口  需要传入id
app.post("/api/delete", (req, res) => {
    let id = req.body.id; //获取删除的id
    let data = JSON.parse(fs.readFileSync("mock/data.json")) //获取本地数据 
    data = data.filter(item => item.id !== id) //通过id过滤本地数据
    fs.writeFileSync("mock/data.json", JSON.stringify(data)); //重新本地数据
    res.send({
        code: 1
    }) //返回结果
})

// 模糊搜索接口
app.post("/api/search", (req, res) => {
    let {
        searchValue
    } = req.body; //获取需要搜索的数据
    let data = JSON.parse(fs.readFileSync("mock/data.json", "utf-8")) //获取本地的数据
    // 模糊搜索
    let result = data.filter(item => {
        return item.username.includes(searchValue)
    })
    res.send(result)
})

//  编辑接口
app.post("/api/modify", (req, res) => {
    let data = JSON.parse(fs.readFileSync("mock/data.json"))
    let obj = data.find(item => item.id === req.body.id);
    Object.assign(obj, req.body);
    fs.writeFileSync("mock/data.json",JSON.stringify(data));
    res.send({code:1})
})


// 添加数据接口
app.post("/api/add", (req, res) => {
    let data = JSON.parse(fs.readFileSync("mock/data.json"));
    data.push({
        ...req.body,
        id: Mock.Random.id(),
        url: Mock.Random.image("50x50")
    })
    fs.writeFileSync("mock/data.json", JSON.stringify(data))
    res.send({
        code: 1
    })
})


app.listen(8080, () => console.log("服务器在8080端口启动了"))