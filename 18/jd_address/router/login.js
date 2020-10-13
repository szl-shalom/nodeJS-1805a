const express = require("express");
const route = express.Router();
const fs = require("fs")


route.post("/", (req, res) => {
    if (req.body.username === "admin" && req.body.password === "123456") {
        res.send({
            code: 1
        })
    } else {
        res.send({
            code: 0
        })
    }
})
module.exports = route;