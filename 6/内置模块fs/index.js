const fs = require("fs");
// fs是node的核心内置模块，可以fs模块去操作咱们的文件



//1. 读取一个文件
/**
 * 异步读取文件
 * fs.readFile(pathname, [ encoding ] ,callback)
 * patname ： 读取文件的路径
 * encoding : 编码格式 不是必须的
 * callback ：读取结束后 callback回调函数会执行\
 *            回调函数的第一个参数 是报错信息  如果报错信息不存在 说明读取成功  否在读取失败
 *            回调函数的第二个参数  是读取出来的内容
 * 同步读取文件
 * fs.readFileSync(pathname, [ encoding ])
 * patname ： 读取文件的路径
 * encoding : 编码格式 不是必须的
 * return ：返回读取出来的数据
 * 
 * 
 */
// let result = fs.readFileSync("./1.txt", "utf-8")
// fs.readFile("1.txt", "utf8", (err, data) => {
//     if (err) {
//         console.log("读取文件报错了")
//         return;
//     }
//     console.log(data)
// })

// 2.写入文件
// fs.writeFileSync(pathname,data)
// fs.writeFile(pathname,data,callback)
// 注意：1、写入的数据是一个字符串
//      2、 如果写入的文件不存在，会创建新文件
// fs.readFile("1.txt", "utf-8", (err, data) => {
//     if (err) {
//         console.log("读取失败了")
//         return;
//     }
//     fs.writeFileSync("2.txt", data + "\n作者：徐志摩")
// })

// 3、追加文件
// fs.appendFile(pathname,data,callback)
// fs.appendFileSync(pathname,data)

// fs.appendFile("1.txt", "\n作者：徐志摩", () => {})

// 4、删除文件
// fs.unlink(pathname,callback)
// fs.unlinkSync(pathname)


// 5复制文件
// fs.copyFile("源文件", "目标文件", callback)
// fs.copyFileSync("源文件", "目标文件")


// fs.copyFileSync("2.txt","1.txt")