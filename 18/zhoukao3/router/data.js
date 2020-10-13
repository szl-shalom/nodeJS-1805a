const express = require("express");
const route = express.Router();
const fs = require("fs");


route.get("/", (req, res) => {
    res.send(fs.readFileSync("mock/data.json"))
})




route.post("/del", (req, res) => {
    let data = JSON.parse(fs.readFileSync("mock/data.json"));
    data = data.filter(item=>item.id !==req.body.id);
    fs.writeFileSync("mock/data.json",JSON.stringify(data))
    res.send({ code :1})
})





module.exports = route;