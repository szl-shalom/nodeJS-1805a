const express = require("express");
const route = express.Router();
const fs = require("fs");


route.get("/", (req, res) => {
    res.end(fs.readFileSync("mock/data.json"))
})

route.post("/add", (req, res) => {
    let data = JSON.parse(fs.readFileSync("mock/data.json"));
    data.push({
        ...req.body,
        id: Math.random().toString().slice(2)
    });
    fs.writeFileSync("mock/data.json", JSON.stringify(data))
    res.send({
        code: 1
    })
})

route.post("/del", (req, res) => {
    let data = JSON.parse(fs.readFileSync("mock/data.json"));
    data = data.filter(item => item.id !== req.body.id)
    fs.writeFileSync("mock/data.json", JSON.stringify(data))
    res.send({
        code: 1
    })
})


route.post("/modify", (req, res) => {
    let data = JSON.parse(fs.readFileSync("mock/data.json"));
    let obj = data.find(item => item.id === req.body.id);
    Object.assign(obj, req.body)
    fs.writeFileSync("mock/data.json", JSON.stringify(data))
    res.send({
        code: 1
    })
})


module.exports = route;