const express = require("express");
const app = express();

app.get("/api/list", (req, res) => res.send("123"))
app.listen(4444, () => console.log("服务器在4444启动了"))