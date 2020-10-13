const express = require("express");
const app = express();
const fs = require("fs");
app.use(express.static("public", {
    index: "login.html"
}))
app.use(express.json());
app.post("/api/login", (req, res) => {
    let {
        username,
        password
    } = req.body;
    let flag = username === "admin" && password === "123";
    flag ? res.send({
        come: 1
    }) : res.send({
        come: 0
    });
})

app.get("/api/list", (req, res) => {
    res.send(fs.readFileSync("mock/data.json", "utf-8"))
})
app.post("/api/delete", (req, res) => {
    let id = req.body.id; //删除的id
    let data = JSON.parse(fs.readFileSync("mock/data.json")) //读取本地数据
    data = data.filter(item => item.id !== id) //过滤id 
    fs.writeFileSync("mock/data.json", JSON.stringify(data))
    res.send({
        code: 1
    })

})


app.all("*", (req, res) => {
    res.end(fs.readFileSync("public/404.html"))
})


app.listen(8080, () => console.log("服务器在8080接口启动了"))