const fs = require("fs");
const path = require("path");

// 根据目录递归生成json文件
const dirToJSON = (dir) => {
    // 判断是不是文件
    return fs.statSync(dir).isFile() ? {
        type: "file", //文件类型
        name: path.basename(dir), //文件名称
        content: fs.readFileSync(dir, "utf-8"), //文件内容
        extname: path.extname(dir), //文件的扩展名
        size: fs.statSync(dir).size, //文件的大小
        pathname: dir
    } : {
        type: "folder", //文件夹类型 
        pathname: dir,
        name: path.basename(dir), //文件夹的名称
        children: fs.readdirSync(dir).map(item => { //文件夹子目录
            // 递归调用
            return dirToJSON(path.join(dir, item))
        })
    }
}
let result = dirToJSON("hh")
fs.writeFileSync("data.json", JSON.stringify(result));