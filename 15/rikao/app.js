const express = require("express");
const app = express();
app.use(express.static("public"));

app.get("/api/list", (req, res) => res.send({
    name: "zhangsan",
    password: 123456
}))
app.listen(8080)