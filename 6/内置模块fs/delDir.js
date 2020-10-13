/**
 * delDir 
 * desc 删除文件夹
 */
const fs = require("fs");







const delDir = (pathname) => {
    // 读取文件夹的目录
    let arr = fs.readdirSync(pathname);
    // 循环目录  item是一个文件或文件夹的名称
    arr.forEach(item => {
        // 获取文件的目录  需要拼接 
        item = pathname + "/" + item
        // 判断该目录是不是文件
        if (fs.statSync(item).isFile()) {
            // 是文件
            fs.unlinkSync(item)
            console.log("文件删除" + item)
        } else {
            // 是文件夹
            delDir(item)
        }
    })
    // 删除文件夹
    fs.rmdirSync(pathname)
    console.log("文件夹删除" + pathname)
}



delDir("hh")