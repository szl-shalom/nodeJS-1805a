const express = require("express");
const app = express();

// 引入数据操作路由
const data = require("./server/page.js")
app.use(express.static("public"));
app.use(express.json());


//  /api/data/getdata
// 使用数据操作的路由
app.use("/api/page", data)


app.listen(8080, () => console.log(8080))